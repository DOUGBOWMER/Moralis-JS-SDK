import { EvmApi } from '../../src/EvmApi';
import { cleanEvmApi, setupEvmApi } from '../setup';

describe('getTokenMetadataBySymbol', () => {
  let evmApi: EvmApi;

  beforeAll(() => {
    evmApi = setupEvmApi();
  });

  afterAll(() => {
    cleanEvmApi();
  });

  it('returns metadata', async () => {
    const result = await evmApi.token.getTokenMetadataBySymbol({
      symbols: ['SHIBA INU'],
    });
    const metadata = result.result[0];

    expect(metadata).toBeDefined();
    expect(metadata).toBeDefined();
    expect(metadata.token.contractAddress.lowercase).toEqual('0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce');
    expect(metadata.token.name).toEqual('SHIBA INU');
    expect(metadata.token.symbol).toEqual('SHIB');
    expect(metadata.token.decimals).toEqual(18);
    expect(metadata.token.possibleSpam).toBe(false);
  });
});
