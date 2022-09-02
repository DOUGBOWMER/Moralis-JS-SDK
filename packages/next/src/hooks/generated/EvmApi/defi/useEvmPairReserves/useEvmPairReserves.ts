import { SWRConfiguration } from 'swr/dist/types';
import { TUseEvmPairReservesParams, TUseEvmPairReservesReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmPairReserves = (params: TUseEvmPairReservesParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseEvmPairReservesReturn>(
    [`/moralis/EvmApi/defi/getPairReserves`, params],
    axiosFetcher,
    SWRConfig,
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};
