import MoralisCore from '@moralisweb3/common-core';
import { SolAddress, SolNetwork } from '../../dataTypes';
import { getSPLOperation, GetSPLRequest } from './getSPLOperation';

describe('getSPLOperation', () => {
  let core: MoralisCore;

  beforeAll(() => {
    core = MoralisCore.create();
  });

  it('serializeRequest() serializes correctly and deserializeRequest() deserializes correctly', () => {
    const address = '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM';
    const network = 'mainnet';

    const request: Required<GetSPLRequest> = {
      address: SolAddress.create(address),
      network: SolNetwork.create(network),
    };

    const serializedRequest = getSPLOperation.serializeRequest(request, core);

    expect(serializedRequest.address).toBe(address);
    expect(serializedRequest.network).toBe(network);

    const deserializedRequest = getSPLOperation.deserializeRequest(serializedRequest, core);

    expect((deserializedRequest.address as SolAddress).address).toBe(address);
    expect((deserializedRequest.network as SolNetwork).network).toBe(network);
  });
});
