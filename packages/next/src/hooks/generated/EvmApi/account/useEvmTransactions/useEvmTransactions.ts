import { SWRConfiguration } from 'swr/dist/types';
import { TUseEvmTransactionsParams, TUseEvmTransactionsReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmTransactions = (params: TUseEvmTransactionsParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseEvmTransactionsReturn>(
    [`/moralis/EvmApi/account/getTransactions`, params],
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
