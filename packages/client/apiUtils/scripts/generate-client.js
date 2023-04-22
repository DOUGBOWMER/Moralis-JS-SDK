if (process.argv.length !== 4) {
  // eslint-disable-next-line no-console
  console.log('Use: node generate-client.js ../path/to/OutputFile.ts @moralisweb3/name-of-library');
  return;
}

function capitalizeFirst(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

const outputFilePath = process.argv[2];
const outputClassName = outputFilePath.split('/').pop().split('.')[0];
const sourcePackageName = process.argv[3];

/* eslint-disable @typescript-eslint/no-var-requires */
const package = require(sourcePackageName);
const fs = require('fs');
const { determineOperationType } = require('@moralisweb3/common-core');

const uniqueGroupNames = new Set(package.operations.map((o) => o.groupName));
const sourcePackageImports = new Set();
let bodyOutput = ``;

for (const groupName of uniqueGroupNames) {
  bodyOutput += `
  public readonly ${groupName} = {
`;

  for (const operation of package.operations.filter((o) => o.groupName === groupName)) {
    const operationVarName = `${operation.name}Operation`;
    const requestClassName = `${capitalizeFirst(operation.name)}Request`;
    const responseClassName = `${capitalizeFirst(operation.name)}ResponseAdapter`;

    let methodName;
    let returnType;
    switch (determineOperationType(operation)) {
      case 'nonNullable':
        methodName = 'handle';
        returnType = responseClassName;
        break;
      case 'nullable':
        methodName = 'handleNullable';
        returnType = `${responseClassName} | null`;
        break;
      case 'paginated':
        methodName = 'handlePaginated';
        returnType = responseClassName;
        break;
    }

    sourcePackageImports.add(operationVarName);
    sourcePackageImports.add(requestClassName);
    sourcePackageImports.add(responseClassName);

    bodyOutput += `   ${operation.name}: (request: ${requestClassName}): Promise<${returnType}> => {
      return this.requestHandler.${methodName}(request, ${operationVarName});
    },
`;
  }

  bodyOutput += `
  };
`;
}

const output = `
// CAUTION: This file is automatically generated. Do not edit it manually!

import { ${[...sourcePackageImports].join(', ')} } from '${sourcePackageName}';
import { ClientRequestHandler } from '@moralisweb3/client-api-utils';

export class ${outputClassName} {
  public constructor(
    private readonly requestHandler: ClientRequestHandler) {
  }
  ${bodyOutput}
}
`;

fs.writeFileSync(outputFilePath, output);
