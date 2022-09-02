import Moralis from "moralis";

type TSDKCall = typeof Moralis.EvmApi.account.getNFTTransfers;
export type TUseEvmNFTTransfersParams = Parameters<TSDKCall>[0];
export type TUseEvmNFTTransfersReturn = ReturnType<NonNullable<Awaited<ReturnType<TSDKCall>>>['toJSON']>;