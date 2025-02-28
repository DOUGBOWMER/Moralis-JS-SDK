import { StreamEvmTransactionLogInput } from './types';

const erc20TransferLog: StreamEvmTransactionLogInput = {
  chain: '0x1',
  logIndex: '10',
  transactionHash: '0xe688fb681f0d5539637a0020a26fab3662fdde48879fffdb1cc3f81909924d9a',
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  data: '0x0000000000000000000000000000000000000000000000000000000257b507a9',
  topic0: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  topic1: '0x000000000000000000000000f89d7b9c864f589bbf53a82105107622b35eaa40',
  topic2: '0x000000000000000000000000f5c91201b04346c683ecbbd06a37ab6df0f594a8',
  topic3: null,
  triggers: [{ name: 'balance', value: '6967063534600021400000' }],
};

const erc1155SingleTransferLog: StreamEvmTransactionLogInput = {
  chain: '0x1',
  logIndex: '193',
  transactionHash: '0x2d7a1d3701d75caa5ec2165599b8fee4a0cc997e44d216d4a12a6240a4d6bc98',
  address: '0xf4910c763ed4e47a585e2d34baa9a4b611ae448c',
  data: '0x295522b61890c3672d12efbff4358a6411ce996f0000000000000100000000140000000000000000000000000000000000000000000000000000000000000001',
  topic0: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
  topic1: '0x000000000000000000000000804159144aefb1dc17b171afcefa5b33746c722f',
  topic2: '0x000000000000000000000000295522b61890c3672d12efbff4358a6411ce996f',
  topic3: '0x0000000000000000000000000ccedbd2f0fecc5fdaf9097e513f18c5da47fca2',
};

const erc721Approval: StreamEvmTransactionLogInput = {
  chain: '0x1',
  address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  topic0: '0xdde371250dcd21c331edbb965b9163f4898566e8c60e28868533281edf66ab03',
  topic1: '0x0000000000000000000000000000000000000000000000000000000000000000',
  data: '0x0020fe349a7800fd5eeaaf755446f4f7412b84f8d46f1165b182e5b5bb67e176',
  logIndex: '0',
  transactionHash: '0x9857d679ab331210161427d36d08c3b00e6d28c03366e9b891832ad9b5d478f7',
};

export const mockStreamEvmTransactionLogInput = {
  ERC20_TRANSFER: erc20TransferLog,
  ERC1155_SINGLE_TRANSFER: erc1155SingleTransferLog,
  ERC721_APPROVAL: erc721Approval,
};
