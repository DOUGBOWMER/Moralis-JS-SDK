import {
  addAddressAptosOperation,
  createStreamAptosOperation,
  deleteAddressAptosOperation,
  deleteStreamAptosOperation,
  getAddressesAptosOperation,
  getStreamAptosOperation,
  getStreamsAptosOperation,
  updateStreamAptosOperation,
  updateStreamStatusAptosOperation,
} from './aptosStreams';
import {
  addAddressEvmOperation,
  createStreamEvmOperation,
  deleteAddressEvmOperation,
  deleteStreamEvmOperation,
  getAddressesEvmOperation,
  getStreamEvmOperation,
  getStreamsEvmOperation,
  updateStreamEvmOperation,
  updateStreamStatusEvmOperation,
} from './evmStreams';
import { getHistoryOperation, replayHistoryOperation } from './history';
import { getSettingsOperation, setSettingsOperation } from './project';
import { getStatsByIdOperation } from './stats';

export const operations = [
  // aptosStreams
  addAddressAptosOperation,
  createStreamAptosOperation,
  deleteAddressAptosOperation,
  deleteStreamAptosOperation,
  getAddressesAptosOperation,
  getStreamAptosOperation,
  getStreamsAptosOperation,
  updateStreamAptosOperation,
  updateStreamStatusAptosOperation,

  // evmStreams
  addAddressEvmOperation,
  createStreamEvmOperation,
  deleteAddressEvmOperation,
  deleteStreamEvmOperation,
  getAddressesEvmOperation,
  getStreamEvmOperation,
  getStreamsEvmOperation,
  updateStreamEvmOperation,
  updateStreamStatusEvmOperation,

  // history
  getHistoryOperation,
  replayHistoryOperation,

  // project
  getSettingsOperation,
  setSettingsOperation,

  // stats
  getStatsByIdOperation,
];
