import { EvmAddress, EvmAddressish, EvmChainish, EvmChain } from '@moralisweb3/common-evm-utils';
import { StreamTriggerOutput, StreamTriggerOutputish, StreamTriggerOutputJSON } from '../StreamTriggerOutput';

export interface StreamErc1155ApprovalInput {
  chain: EvmChainish;
  transactionHash: string;
  contract: EvmAddressish;
  logIndex: number | string;
  account: EvmAddressish;
  operator: EvmAddressish;
  approved: boolean;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  triggers?: StreamTriggerOutputish[];
}
export interface StreamErc1155ApprovalData {
  chain: EvmChain;
  transactionHash: string;
  contract: EvmAddress;
  logIndex: number;
  account: EvmAddress;
  operator: EvmAddress;
  approved: boolean;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  triggers?: StreamTriggerOutput[];
}

export type StreamErc1155ApprovalJSON = {
  chain: number | string;
  transactionHash: string;
  contract: string;
  logIndex: number | string;
  account: string;
  operator: string;
  approved: boolean;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  triggers?: StreamTriggerOutputJSON[];
};
