import {
  createProgram,
  isIdentifier,
  isIndexedAccessTypeNode,
  isInterfaceDeclaration,
  isLiteralExpression,
  isLiteralTypeNode,
  isPropertySignature,
  isStringLiteral,
  Node,
  PropertySignature,
  SourceFile,
} from 'typescript';
import { TsNodeWalker } from './TsNodeWalker';

export class OpenApiInterfaceReader {
  private readonly sourceFile: SourceFile;

  public constructor(tsFilePath: string) {
    const program = createProgram([tsFilePath], {});
    const sourceFile = program.getSourceFile(tsFilePath);
    if (!sourceFile) {
      throw new Error(`Cannot load source file ${tsFilePath}`);
    }
    this.sourceFile = sourceFile;
  }

  private getInterfaceNode(name: string): Node {
    const result = TsNodeWalker.traverse(this.sourceFile, (child) => {
      return isInterfaceDeclaration(child) && child.name.text === name ? child : null;
    });
    if (result.length !== 1) {
      throw new Error(`Cannot find interface ${name}`);
    }
    return result[0];
  }

  private findLastNode(node: Node, path: string[]) {
    function find(parent: Node, pathIndex: number): PropertySignature | null {
      const name = path[pathIndex];
      const result = TsNodeWalker.traverse(parent, (child) => {
        if (
          isPropertySignature(child) &&
          (isIdentifier(child.name) || isStringLiteral(child.name)) &&
          child.name.text === name
        ) {
          return child;
        }
        return null;
      });
      if (result.length === 0) {
        return null;
      }
      if (pathIndex === path.length - 1) {
        return result[0];
      }
      return find(result[0].type as Node, pathIndex + 1);
    }
    return find(node, 0);
  }

  private findLastNodeOfInterface(interfaceName: string, path: string[]) {
    return this.findLastNode(this.getInterfaceNode(interfaceName), path);
  }

  private readPropertyNames(node: Node): string[] {
    return TsNodeWalker.traverse(node, (child) => {
      return isPropertySignature(child) && isIdentifier(child.name) ? child.name.text : null;
    });
  }

  private readPropertyNamesOfInterface(interfaceName: string, path: string[]): string[] | null {
    const node = this.findLastNodeOfInterface(interfaceName, path);
    return node?.type ? this.readPropertyNames(node.type) : null;
  }

  public readOperationPathParamNames(operationName: string): string[] | null {
    return this.readPropertyNamesOfInterface('operations', [operationName, 'parameters', 'path']);
  }

  public readOperationSearchParamNames(operationName: string): string[] | null {
    return this.readPropertyNamesOfInterface('operations', [operationName, 'parameters', 'query']);
  }

  public readOperationRequestBodyParamNames(operationName: string): string[] | null {
    const body = this.findLastNodeOfInterface('operations', [
      operationName,
      'requestBody',
      'content',
      'application/json',
    ]);
    if (body && body.type) {
      const valIsIndexedAccessTypeNode = isIndexedAccessTypeNode(body.type);
      if (valIsIndexedAccessTypeNode) {
        if (isLiteralTypeNode(body.type.indexType) && isLiteralExpression(body.type.indexType.literal)) {
          const schemaName = body.type.indexType.literal.text;
          return this.readPropertyNamesOfInterface('components', ['schemas', schemaName]);
        }
      } else {
        return this.readPropertyNames(body.type);
      }
    }
    return null;
  }
}
