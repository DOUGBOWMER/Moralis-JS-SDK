
// CAUTION: This file is automatically generated. Do not edit it manually!

import { getBalanceOperation, GetBalanceRequest, GetBalanceResponseAdapter, getNFTsOperation, GetNFTsRequest, GetNFTsResponseAdapter, getPortfolioOperation, GetPortfolioRequest, GetPortfolioResponseAdapter, getSPLOperation, GetSPLRequest, GetSPLResponseAdapter, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponseAdapter, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponseAdapter } from '@moralisweb3/common-sol-utils';
import { ClientRequestHandler } from '@moralisweb3/client-api-utils';

export class ClientSolApi {
  public constructor(
    private readonly requestHandler: ClientRequestHandler) {
  }
  
  public readonly account = {
   getBalance: (request: GetBalanceRequest): Promise<GetBalanceResponseAdapter> => {
      return this.requestHandler.handle(request, getBalanceOperation);
    },
   getNFTs: (request: GetNFTsRequest): Promise<GetNFTsResponseAdapter> => {
      return this.requestHandler.handle(request, getNFTsOperation);
    },
   getPortfolio: (request: GetPortfolioRequest): Promise<GetPortfolioResponseAdapter> => {
      return this.requestHandler.handle(request, getPortfolioOperation);
    },
   getSPL: (request: GetSPLRequest): Promise<GetSPLResponseAdapter> => {
      return this.requestHandler.handle(request, getSPLOperation);
    },

  };

  public readonly nft = {
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<GetNFTMetadataResponseAdapter> => {
      return this.requestHandler.handle(request, getNFTMetadataOperation);
    },

  };

  public readonly token = {
   getTokenPrice: (request: GetTokenPriceRequest): Promise<GetTokenPriceResponseAdapter> => {
      return this.requestHandler.handle(request, getTokenPriceOperation);
    },

  };

}
