import { BigNumber, BigNumberish } from '@moralisweb3/common-core';
import { EvmAddress, EvmAddressish, EvmChainish, EvmChain } from '@moralisweb3/common-evm-utils';
import { StreamTriggerOutput, StreamTriggerOutputish, StreamTriggerOutputJSON } from '../StreamTriggerOutput';

export interface StreamErc20ApprovalInput {
  chain: EvmChainish;
  transactionHash: string;
  contract: EvmAddressish;
  logIndex: string | number;

  owner: EvmAddressish;
  spender: EvmAddressish;
  value: BigNumberish;

  tokenDecimals: number | string;
  tokenName: string;
  tokenSymbol: string;
  valueWithDecimals?: null | string;
  triggers?: StreamTriggerOutputish[];
}

export interface StreamErc20ApprovalData {
  chain: EvmChain;
  transactionHash: string;
  contract: EvmAddress;
  logIndex: string | number;

  owner: EvmAddress;
  spender: EvmAddress;
  value: BigNumber;

  tokenDecimals?: number;
  tokenName: string;
  tokenSymbol: string;
  valueWithDecimals?: string;
  triggers?: StreamTriggerOutput[];
}

export type StreamErc20ApprovalJSON = {
  chain: number | string;
  transactionHash: string;
  contract: string;
  logIndex: string | number;

  owner: string;
  spender: string;
  value: string;

  tokenDecimals?: number;
  tokenName: string;
  tokenSymbol: string;
  valueWithDecimals?: string;
  triggers?: StreamTriggerOutputJSON[];
};
