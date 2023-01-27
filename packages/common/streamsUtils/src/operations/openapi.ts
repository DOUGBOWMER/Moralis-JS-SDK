/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/history": {
    /** Get all history */
    get: operations["GetHistory"];
  };
  "/history/replay/{streamId}/{id}": {
    /** Replay a specific history. */
    post: operations["ReplayHistory"];
  };
  "/settings": {
    /** Get the settings for the current project based on the project api-key. */
    get: operations["GetSettings"];
    /** Set the settings for the current project based on the project api-key. */
    post: operations["SetSettings"];
  };
  "/stats": {
    /** Get the global stats for the account. */
    get: operations["GetStats"];
  };
  "/stats/{streamId}": {
    /** Get the stats for the streamId specified */
    get: operations["GetStatsByStreamId"];
  };
  "/streams/evm": {
    /** Get all the evm streams for the current project based on the project api-key. */
    get: operations["GetStreams"];
    /** Creates a new evm stream. */
    put: operations["CreateStream"];
  };
  "/streams/evm/{id}": {
    /** Get a specific evm stream. */
    get: operations["GetStream"];
    /** Updates a specific evm stream. */
    post: operations["UpdateStream"];
    /** Delete a specific evm stream. */
    delete: operations["DeleteStream"];
  };
  "/streams/evm/{id}/status": {
    /** Updates the status of specific evm stream. */
    post: operations["UpdateStreamStatus"];
  };
  "/streams/evm/{id}/address": {
    /** Get all addresses associated with a specific stream. */
    get: operations["GetAddresses"];
    /** Adds an address to a Stream. */
    post: operations["AddAddressToStream"];
    /** Deletes an address from a Stream. */
    delete: operations["DeleteAddressFromStream"];
  };
  "/streams/aptos": {
    /** Get all aptos streams. */
    get: operations["aptosStreamsGetAll"];
    /** Creates a new aptos stream. */
    put: operations["aptosStreamsCreate"];
  };
  "/streams/aptos/{id}": {
    /** Get a specific aptos stream. */
    get: operations["aptosStreamsGet"];
    /** Updates a new aptos stream. */
    post: operations["aptosStreamsUpdate"];
    /** Deletes a aptos stream. */
    delete: operations["aptosStreamsDelete"];
  };
  "/streams/aptos/{id}/address": {
    /** Get all addresses associated with a specific aptos stream. */
    get: operations["aptosStreamsGetAddresses"];
    /** Adds addresses to an existing aptos stream */
    post: operations["aptosStreamsAddAddresses"];
    /** Deletes addresses of an existing aptos stream */
    delete: operations["aptosStreamsDeleteAddresses"];
  };
  "/streams/aptos/{id}/status": {
    /** Update a Stream Status */
    post: operations["aptosStreamsUpdateStatus"];
  };
}

export interface components {
  schemas: {
    /**
     * Format: uuid
     * @description Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     */
    UUID: string;
    Block: {
      number: string;
      hash: string;
      timestamp: string;
    };
    TriggerOutput: {
      value: unknown;
      name: string;
    };
    Log: {
      triggers?: components["schemas"]["TriggerOutput"][];
      logIndex: string;
      transactionHash: string;
      address: string;
      data: string;
      topic0: string | null;
      topic1: string | null;
      topic2: string | null;
      topic3: string | null;
    };
    Transaction: {
      triggers?: components["schemas"]["TriggerOutput"][];
      hash: string;
      gas: string | null;
      gasPrice: string | null;
      nonce: string | null;
      input: string | null;
      transactionIndex: string;
      fromAddress: string;
      toAddress: string | null;
      value: string | null;
      type: string | null;
      v: string | null;
      r: string | null;
      s: string | null;
      receiptCumulativeGasUsed: string | null;
      receiptGasUsed: string | null;
      receiptContractAddress: string | null;
      receiptRoot: string | null;
      receiptStatus: string | null;
    };
    InternalTransaction: {
      from: string | null;
      to: string | null;
      value: string | null;
      transactionHash: string;
      gas: string | null;
    };
    AbiInput: {
      name: string;
      type: string;
      indexed?: boolean;
      components?: components["schemas"]["AbiInput"][];
      internalType?: string;
    };
    AbiOutput: {
      name: string;
      type: string;
      components?: components["schemas"]["AbiOutput"][];
      internalType?: string;
    };
    /**
     * @description The abi to parse the log object of the contract
     * @example {}
     */
    AbiItem: {
      anonymous?: boolean;
      constant?: boolean;
      inputs?: components["schemas"]["AbiInput"][];
      name?: string;
      outputs?: components["schemas"]["AbiOutput"][];
      payable?: boolean;
      stateMutability?: string;
      type: string;
      /** Format: double */
      gas?: number;
    };
    "webhookTypes.IWebhookUnParsed": {
      block: components["schemas"]["Block"];
      chainId: string;
      logs: components["schemas"]["Log"][];
      txs: components["schemas"]["Transaction"][];
      txsInternal: components["schemas"]["InternalTransaction"][];
      abi: components["schemas"]["AbiItem"][];
      /** Format: double */
      retries: number;
      confirmed: boolean;
      tag: string;
      streamId: string;
    };
    AptosBlock: {
      lastVersion: string;
      firstVersion: string;
      hash: string;
      timestamp: string;
      number: string;
    };
    AptosCoin: {
      symbol: string;
      /** Format: double */
      decimals: number;
      name: string;
    };
    AptosCoinDeposit: {
      sequenceNumber: string;
      valueWithDecimals: string;
      coin: components["schemas"]["AptosCoin"];
      address: string;
      value: string;
    };
    AptosCoinTransfer: {
      transaction: string;
      /** Format: double */
      valueWithDecimals: number;
      from: string;
      value: string;
      to: string;
      coin: components["schemas"]["AptosCoin"];
    };
    AptosCoinWithdrawal: {
      sequenceNumber: string;
      valueWithDecimals: string;
      coin: components["schemas"]["AptosCoin"];
      address: string;
      value: string;
    };
    AptosTransaction: {
      gasUnitPrice: string;
      type: string;
      gasUsed: string;
      eventChangeHash: string;
      stateChangeHash: string;
      gasLimit: string;
      sender: string;
      success: boolean;
      hash: string;
    };
    "webhookTypes.AptosWebhook": {
      block: components["schemas"]["AptosBlock"];
      changes: unknown[];
      coinDeposits: components["schemas"]["AptosCoinDeposit"][];
      coinTransfers: components["schemas"]["AptosCoinTransfer"][];
      coinWithdrawals: components["schemas"]["AptosCoinWithdrawal"][];
      events: unknown[];
      /** @enum {string} */
      network: "mainnet" | "testnet" | "devnet";
      payloads: unknown[];
      /** Format: double */
      retries: number;
      streamId: string;
      tag: string;
      transactions: components["schemas"]["AptosTransaction"][];
    };
    "webhookTypes.ITinyPayload": {
      chainId: string;
      confirmed: boolean;
      block: string;
      /** Format: double */
      records: number;
      /** Format: double */
      retries: number;
    };
    HistoryModel: {
      id: components["schemas"]["UUID"];
      /** Format: date-time */
      date: string;
      payload?: Partial<
        components["schemas"]["webhookTypes.IWebhookUnParsed"]
      > &
        Partial<components["schemas"]["webhookTypes.AptosWebhook"]>;
      tinyPayload: components["schemas"]["webhookTypes.ITinyPayload"];
      errorMessage: string;
      webhookUrl: string;
      streamId: string;
      tag: string;
    };
    "historyTypes.HistoryResponse": {
      result: components["schemas"]["HistoryModel"][];
      cursor?: string;
      /** Format: double */
      total: number;
    };
    "historyTypes.HistoryModel": {
      id: components["schemas"]["UUID"];
      /** Format: date-time */
      date: string;
      payload?: Partial<
        components["schemas"]["webhookTypes.IWebhookUnParsed"]
      > &
        Partial<components["schemas"]["webhookTypes.AptosWebhook"]>;
      tinyPayload: components["schemas"]["webhookTypes.ITinyPayload"];
      errorMessage: string;
      webhookUrl: string;
      streamId: string;
      tag: string;
    };
    /**
     * Format: uuid
     * @description Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     */
    "streamTypes.UUID": string;
    /**
     * Format: uuid
     * @description Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     */
    "historyTypes.UUID": string;
    /** @enum {string} */
    SettingsRegion:
      | "us-east-1"
      | "us-west-2"
      | "eu-central-1"
      | "ap-southeast-1";
    "settingsTypes.SettingsModel": {
      /** @description The region from where all the webhooks will be posted for this project */
      region?: components["schemas"]["SettingsRegion"];
    };
    UsageStatsStreams: {
      /**
       * Format: double
       * @description The total amount of webhooks delivered across all streams
       */
      totalWebhooksDelivered: number;
      /**
       * Format: double
       * @description The total amount of failed webhooks across all streams
       */
      totalWebhooksFailed: number;
      /**
       * Format: double
       * @description The total amount of logs processed across all streams, this includes failed webhooks
       */
      totalLogsProcessed: number;
      /**
       * Format: double
       * @description The total amount of txs processed across all streams, this includes failed webhooks
       */
      totalTxsProcessed: number;
      /**
       * Format: double
       * @description The total amount of internal txs processed across all streams, this includes failed webhooks
       */
      totalTxsInternalProcessed: number;
      /** @description The stream id */
      streamId: string;
    };
    "usagestatsTypes.UsageStatsModel": {
      /**
       * Format: double
       * @description The total amount of webhooks delivered across all streams
       */
      totalWebhooksDelivered: number;
      /**
       * Format: double
       * @description The total amount of failed webhooks across all streams
       */
      totalWebhooksFailed: number;
      /**
       * Format: double
       * @description The total amount of logs processed across all streams, this includes failed webhooks
       */
      totalLogsProcessed: number;
      /**
       * Format: double
       * @description The total amount of txs processed across all streams, this includes failed webhooks
       */
      totalTxsProcessed: number;
      /**
       * Format: double
       * @description The total amount of internal txs processed across all streams, this includes failed webhooks
       */
      totalTxsInternalProcessed: number;
      /** @description Array of stream stats */
      streams?: components["schemas"]["UsageStatsStreams"][];
      /**
       * Format: date-time
       * @description The date since this stats are being counted
       */
      createdAt?: string;
      /**
       * Format: date-time
       * @description The date since this stats were last updated
       */
      updatedAt?: string;
    };
    /**
     * Format: uuid
     * @description Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     */
    "streamsTypes.UUID": string;
    /**
     * @description The stream status:
     * [active] The Stream is healthy and processing blocks
     * [paused] The Stream is paused and is not processing blocks
     * [error] The Stream has encountered an error and is not processing blocks
     * @enum {string}
     */
    StreamsStatus: "active" | "paused" | "error" | "terminated";
    getNativeBalances: {
      selectors: string[];
      /** @enum {string} */
      type:
        | "tx"
        | "log"
        | "erc20transfer"
        | "erc20approval"
        | "nfttransfer"
        | "internalTx";
    };
    /**
     * @description The filter object for the topic0
     * https://docs.moralis.io/docs/filter-streams
     * @example {}
     */
    StreamsFilter: { [key: string]: unknown };
    /** @description Advanced Options for each specific topic */
    advancedOptions: {
      topic0: string;
      filter?: components["schemas"]["StreamsFilter"];
      includeNativeTxs?: boolean;
    };
    /** @description Trigger */
    StreamsTrigger: {
      /** @enum {string} */
      type: "tx" | "log" | "erc20transfer" | "erc20approval" | "nfttransfer";
      contractAddress: string;
      inputs?: (Partial<string> & Partial<unknown[]>)[];
      functionAbi: components["schemas"]["AbiItem"];
      topic0?: string;
      callFrom?: string;
    };
    StreamsModel: {
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl: string;
      /** @description A description for this stream */
      description: string;
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag: string;
      /** @description An Array of topic0's in string-signature format ex: ['FunctionName(address,uint256)'] */
      topic0?: string[] | null;
      /** @description Include events for all addresses (only applied when abi and topic0 is provided) */
      allAddresses?: boolean;
      /** @description Include or not native transactions defaults to false */
      includeNativeTxs?: boolean;
      /** @description Include or not logs of contract interactions defaults to false */
      includeContractLogs?: boolean;
      /** @description Include or not include internal transactions defaults to false */
      includeInternalTxs?: boolean;
      /** @description Include native balances for each address in the webhook */
      getNativeBalances?: components["schemas"]["getNativeBalances"][];
      abi?: components["schemas"]["AbiItem"][] | null;
      advancedOptions?: components["schemas"]["advancedOptions"][] | null;
      /** @description The ids of the chains for this stream in hex Ex: ["0x1","0x38"] */
      chainIds: string[];
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description triggers */
      triggers?: components["schemas"]["StreamsTrigger"][] | null;
      /** @description The unique uuid of the stream */
      id: components["schemas"]["UUID"];
      /** @description The status of the stream. */
      status: components["schemas"]["StreamsStatus"];
      /** @description Description of current status of stream. */
      statusMessage: string;
    };
    "streamsTypes.StreamsResponse": {
      /** @description Array of project Streams */
      result: components["schemas"]["StreamsModel"][];
      /** @description Cursor for fetching next page */
      cursor?: string;
      /**
       * Format: double
       * @description Total count of streams on the project
       */
      total: number;
    };
    "streamsTypes.StreamsModel": {
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl: string;
      /** @description A description for this stream */
      description: string;
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag: string;
      /** @description An Array of topic0's in string-signature format ex: ['FunctionName(address,uint256)'] */
      topic0?: string[] | null;
      /** @description Include events for all addresses (only applied when abi and topic0 is provided) */
      allAddresses?: boolean;
      /** @description Include or not native transactions defaults to false */
      includeNativeTxs?: boolean;
      /** @description Include or not logs of contract interactions defaults to false */
      includeContractLogs?: boolean;
      /** @description Include or not include internal transactions defaults to false */
      includeInternalTxs?: boolean;
      /** @description Include native balances for each address in the webhook */
      getNativeBalances?: components["schemas"]["getNativeBalances"][];
      abi?: components["schemas"]["AbiItem"][] | null;
      advancedOptions?: components["schemas"]["advancedOptions"][] | null;
      /** @description The ids of the chains for this stream in hex Ex: ["0x1","0x38"] */
      chainIds: string[];
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description triggers */
      triggers?: components["schemas"]["StreamsTrigger"][] | null;
      /** @description The unique uuid of the stream */
      id: components["schemas"]["UUID"];
      /** @description The status of the stream. */
      status: components["schemas"]["StreamsStatus"];
      /** @description Description of current status of stream. */
      statusMessage: string;
    };
    "streamsTypes.StreamsModelCreate": {
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl: string;
      /** @description A description for this stream */
      description: string;
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag: string;
      /** @description An Array of topic0's in string-signature format ex: ['FunctionName(address,uint256)'] */
      topic0?: string[] | null;
      /** @description Include events for all addresses (only applied when abi and topic0 is provided) */
      allAddresses?: boolean;
      /** @description Include or not native transactions defaults to false */
      includeNativeTxs?: boolean;
      /** @description Include or not logs of contract interactions defaults to false */
      includeContractLogs?: boolean;
      /** @description Include or not include internal transactions defaults to false */
      includeInternalTxs?: boolean;
      /** @description Include native balances for each address in the webhook */
      getNativeBalances?: components["schemas"]["getNativeBalances"][];
      abi?: components["schemas"]["AbiItem"][] | null;
      advancedOptions?: components["schemas"]["advancedOptions"][] | null;
      /** @description The ids of the chains for this stream in hex Ex: ["0x1","0x38"] */
      chainIds: string[];
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description triggers */
      triggers?: components["schemas"]["StreamsTrigger"][] | null;
    };
    /** @description Make all properties in T optional */
    "Partial_streamsTypes.StreamsModelCreate_": {
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl?: string;
      /** @description A description for this stream */
      description?: string;
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag?: string;
      /** @description An Array of topic0's in string-signature format ex: ['FunctionName(address,uint256)'] */
      topic0?: string[] | null;
      /** @description Include events for all addresses (only applied when abi and topic0 is provided) */
      allAddresses?: boolean;
      /** @description Include or not native transactions defaults to false */
      includeNativeTxs?: boolean;
      /** @description Include or not logs of contract interactions defaults to false */
      includeContractLogs?: boolean;
      /** @description Include or not include internal transactions defaults to false */
      includeInternalTxs?: boolean;
      /** @description Include native balances for each address in the webhook */
      getNativeBalances?: components["schemas"]["getNativeBalances"][];
      abi?: components["schemas"]["AbiItem"][] | null;
      advancedOptions?: components["schemas"]["advancedOptions"][] | null;
      /** @description The ids of the chains for this stream in hex Ex: ["0x1","0x38"] */
      chainIds?: string[];
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description triggers */
      triggers?: components["schemas"]["StreamsTrigger"][] | null;
    };
    "streamsTypes.StreamsStatusUpdate": {
      /** @description The status of the stream. */
      status: components["schemas"]["StreamsStatus"];
    };
    Addresses: {
      /** @description Address */
      address: string;
    };
    "addressesTypes.AddressesResponse": {
      /** @description Array of project Streams */
      result: components["schemas"]["Addresses"][];
      /** @description Cursor for fetching next page */
      cursor?: string;
      /**
       * Format: double
       * @description Total count of streams on the project
       */
      total: number;
    };
    /**
     * Format: uuid
     * @description Stringified UUIDv4.
     * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
     */
    "addressesTypes.UUID": string;
    "addressesTypes.AddressResponse": {
      /** @description The streamId */
      streamId: string;
      /** @description Address */
      address: Partial<string> & Partial<string[]>;
    };
    "addressesTypes.AddressesAdd": {
      /** @description The address or a list of addresses to be added to the Stream. */
      address: Partial<string> & Partial<string[]>;
    };
    "addressesTypes.AddressesRemove": {
      /** @description The address or a list of addresses to be removed from the Stream. */
      address: Partial<string> & Partial<string[]>;
    };
    AptosNetwork: ("mainnet" | "testnet" | "devnet")[];
    AptosStreamType: {
      id: string;
      allAddresses: boolean;
      demo: boolean;
      description: string;
      includeChanges: boolean;
      includeEvents: boolean;
      includePayload: boolean;
      /** Format: date-time */
      isErrorSince: string | null;
      network: components["schemas"]["AptosNetwork"];
      status: components["schemas"]["StreamsStatus"];
      statusMessage: string;
      events: string[];
      functions: string[];
      tag: string;
      webhookUrl: string;
      /** Format: double */
      amountOfAddresses: number;
    };
    AptosCreateStreamType: {
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl: string;
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag: string;
      /** @description An Array of events in string-signature format ex: ['0x1::aptos_account::transfer'] */
      functions?: string[];
      /** @description An Array of events in string-signature format ex: ['0x1::coin::WithdrawEvent'] */
      events?: string[];
      /** @description The network to listen to */
      network: components["schemas"]["AptosNetwork"];
      /** @description Include or not payload for every transaction in webhook defaults to false */
      includePayload?: boolean;
      /** @description Include or not events in webhook defaults to false */
      includeEvents?: boolean;
      /** @description Include or not raw changes for every transaction in webhook defaults to false */
      includeChanges?: boolean;
      /** @description A description for this stream */
      description: string;
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description Include events for all addresses (only applied when at least one event or function is provided) */
      allAddresses?: boolean;
    };
    /** @description Make all properties in T optional */
    Partial_AptosCreateStreamType_: {
      /** @description Include events for all addresses (only applied when at least one event or function is provided) */
      allAddresses?: boolean;
      /** @description Indicator if it is a demo stream */
      demo?: boolean;
      /** @description A description for this stream */
      description?: string;
      /** @description Include or not raw changes for every transaction in webhook defaults to false */
      includeChanges?: boolean;
      /** @description Include or not events in webhook defaults to false */
      includeEvents?: boolean;
      /** @description Include or not payload for every transaction in webhook defaults to false */
      includePayload?: boolean;
      /** @description The network to listen to */
      network?: components["schemas"]["AptosNetwork"];
      /** @description An Array of events in string-signature format ex: ['0x1::coin::WithdrawEvent'] */
      events?: string[];
      /** @description An Array of events in string-signature format ex: ['0x1::aptos_account::transfer'] */
      functions?: string[];
      /** @description A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present */
      tag?: string;
      /** @description Webhook URL where moralis will send the POST request. */
      webhookUrl?: string;
    };
    /** @description From T, pick a set of properties whose keys are in the union K */
    "Pick_AptosStreamType.status-or-statusMessage_": {
      status: components["schemas"]["StreamsStatus"];
      statusMessage: string;
    };
    /** @enum {string} */
    "streamsTypes.StreamsStatus.active": "active";
    /** @enum {string} */
    "streamsTypes.StreamsStatus.paused": "paused";
  };
  responses: {};
  parameters: {};
  requestBodies: {};
  headers: {};
}

export interface operations {
  /** Get all history */
  GetHistory: {
    parameters: {
      query: {
        limit: number;
        cursor?: string;
        excludePayload?: boolean;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["historyTypes.HistoryResponse"];
        };
      };
    };
  };
  /** Replay a specific history. */
  ReplayHistory: {
    parameters: {
      path: {
        /** The id of the stream the history will be replayed */
        streamId: components["schemas"]["streamTypes.UUID"];
        /** The id of the history to replay */
        id: components["schemas"]["historyTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["historyTypes.HistoryModel"];
        };
      };
    };
  };
  /** Get the settings for the current project based on the project api-key. */
  GetSettings: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["settingsTypes.SettingsModel"];
        };
      };
    };
  };
  /** Set the settings for the current project based on the project api-key. */
  SetSettings: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["settingsTypes.SettingsModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["settingsTypes.SettingsModel"];
      };
    };
  };
  /** Get the global stats for the account. */
  GetStats: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["usagestatsTypes.UsageStatsModel"];
        };
      };
    };
  };
  /** Get the stats for the streamId specified */
  GetStatsByStreamId: {
    parameters: {
      path: {
        /** The id of the stream to get the stats */
        streamId: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["usagestatsTypes.UsageStatsModel"];
        };
      };
    };
  };
  /** Get all the evm streams for the current project based on the project api-key. */
  GetStreams: {
    parameters: {
      query: {
        /** Limit response results max value 100 */
        limit: number;
        /** Cursor for fetching next page */
        cursor?: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsResponse"];
        };
      };
    };
  };
  /** Creates a new evm stream. */
  CreateStream: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsModel"];
        };
      };
    };
    /** Provide a Stream Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["streamsTypes.StreamsModelCreate"];
      };
    };
  };
  /** Get a specific evm stream. */
  GetStream: {
    parameters: {
      path: {
        /** The id of the stream to get */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsModel"];
        };
      };
    };
  };
  /** Updates a specific evm stream. */
  UpdateStream: {
    parameters: {
      path: {
        /** The id of the stream to update */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsModel"];
        };
      };
    };
    /** Provide a Stream Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Partial_streamsTypes.StreamsModelCreate_"];
      };
    };
  };
  /** Delete a specific evm stream. */
  DeleteStream: {
    parameters: {
      path: {
        /** The id of the stream to delete */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsModel"];
        };
      };
    };
  };
  /** Updates the status of specific evm stream. */
  UpdateStreamStatus: {
    parameters: {
      path: {
        /** The id of the stream to update */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["streamsTypes.StreamsModel"];
        };
      };
    };
    /** Provide a Stream Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["streamsTypes.StreamsStatusUpdate"];
      };
    };
  };
  /** Get all addresses associated with a specific stream. */
  GetAddresses: {
    parameters: {
      path: {
        /** the id of the stream to get the addresses from */
        id: components["schemas"]["addressesTypes.UUID"];
      };
      query: {
        /** Limit response results max value 100 */
        limit: number;
        /** Cursor for fetching next page */
        cursor?: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["addressesTypes.AddressesResponse"];
        };
      };
    };
  };
  /** Adds an address to a Stream. */
  AddAddressToStream: {
    parameters: {
      path: {
        /** The id of the stream to add the address to */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["addressesTypes.AddressResponse"];
        };
      };
    };
    /** Provide a Address Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["addressesTypes.AddressesAdd"];
      };
    };
  };
  /** Deletes an address from a Stream. */
  DeleteAddressFromStream: {
    parameters: {
      path: {
        /** The id of the stream to delete the address from */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["addressesTypes.AddressResponse"];
        };
      };
    };
    /** Provide a Address Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["addressesTypes.AddressesRemove"];
      };
    };
  };
  /** Get all aptos streams. */
  aptosStreamsGetAll: {
    parameters: {
      query: {
        /** Limit response results max value 100 */
        limit: number;
        /** Cursor for fetching next page */
        cursor?: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": {
            /** Format: double */
            total: number;
            result: components["schemas"]["AptosStreamType"][];
          };
        };
      };
    };
  };
  /** Creates a new aptos stream. */
  aptosStreamsCreate: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["AptosStreamType"];
        };
      };
    };
    /** Provide a valid Aptos Stream Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["AptosCreateStreamType"];
      };
    };
  };
  /** Get a specific aptos stream. */
  aptosStreamsGet: {
    parameters: {
      path: {
        /** The id of the stream to get */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["AptosStreamType"];
        };
      };
    };
  };
  /** Updates a new aptos stream. */
  aptosStreamsUpdate: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["AptosStreamType"];
        };
      };
    };
    /** Provide valid values of a Aptos Stream Model */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Partial_AptosCreateStreamType_"];
      };
    };
  };
  /** Deletes a aptos stream. */
  aptosStreamsDelete: {
    parameters: {
      path: {
        /** the id of the aptos stream to delete */
        id: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  /** Get all addresses associated with a specific aptos stream. */
  aptosStreamsGetAddresses: {
    parameters: {
      path: {
        /** the id of the aptos stream to get the addresses from */
        id: components["schemas"]["streamsTypes.UUID"];
      };
      query: {
        /** Limit response results max value 100 */
        limit: number;
        /** Cursor for fetching next page */
        cursor?: string;
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": {
            address: Partial<string> & Partial<string[]>;
          }[];
        };
      };
    };
  };
  /** Adds addresses to an existing aptos stream */
  aptosStreamsAddAddresses: {
    parameters: {
      path: {
        /** the id of the aptos stream to get the addresses from */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": {
            address: Partial<string> & Partial<string[]>;
            streamId: string;
          };
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          address: Partial<string> & Partial<string[]>;
        };
      };
    };
  };
  /** Deletes addresses of an existing aptos stream */
  aptosStreamsDeleteAddresses: {
    parameters: {
      path: {
        /** the id of the aptos stream to get the addresses from */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": {
            address: Partial<string> & Partial<string[]>;
            streamId: string;
          };
        };
      };
    };
    /** Provide a list of valid Aptos addresses, or a single address */
    requestBody: {
      content: {
        "application/json": {
          address: Partial<string> & Partial<string[]>;
        };
      };
    };
  };
  /** Update a Stream Status */
  aptosStreamsUpdateStatus: {
    parameters: {
      path: {
        /** the id of the aptos stream to update the status */
        id: components["schemas"]["streamsTypes.UUID"];
      };
    };
    responses: {
      /** Ok */
      200: {
        content: {
          "application/json": components["schemas"]["Pick_AptosStreamType.status-or-statusMessage_"];
        };
      };
    };
    /** Provide an object with the status to update can be 'active' or 'paused' */
    requestBody: {
      content: {
        "application/json": {
          status: Partial<
            components["schemas"]["streamsTypes.StreamsStatus.active"]
          > &
            Partial<components["schemas"]["streamsTypes.StreamsStatus.paused"]>;
        };
      };
    };
  };
}

export interface external {}
