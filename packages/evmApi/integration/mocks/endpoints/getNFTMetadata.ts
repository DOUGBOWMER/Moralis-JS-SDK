import { MockScenarios } from '@moralisweb3/test-utils';
import { createErrorResponse } from '../response/errorResponse';

export const mockGetNFTMetadata = MockScenarios.create(
  {
    method: 'get',
    name: 'mockGetNFTMetadata',
    url: `/nft/:address/:tokenId`,
    getParams: ({ req }) => ({
      address: req.params.address,
      tokenId: req.params.tokenId,
      media_items: req.url.searchParams.get('media_items'),
    }),
  },
  [
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387a',
        tokenId: '15',
      },
      response: {
        token_address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
        token_id: '15',
        owner_of: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        token_hash: '502cee781b0fb40ea02508b21d319ced',
        block_number: '88256',
        block_number_minted: '88256',
        contract_type: 'ERC721',
        token_uri: 'string',
        metadata: 'string',
        possible_spam: false,
        normalized_metadata: {
          name: 'Moralis Mug',
          description:
            'Moralis Coffee nug 3D Asset that can be used in 3D worldspaces. This NFT is presented as a flat PNG, a Unity3D Prefab and a standard fbx.',
          image:
            'https://arw2wxg84h6b.moralishost.com:2053/server/files/tNJatzsHirx4V2VAep6sc923OYGxvkpBeJttR7Ks/de504bbadadcbe30c86278342fcf2560_moralismug.png',
          external_link: 'https://giphy.com/gifs/loop-recursion-ting-aaODAv1iuQdgI',
          animation_url: 'https://giphy.com/gifs/food-design-donuts-o9ngTPVYW4qo8',
          attributes: [
            {
              trait_type: 'Eye Color',
              value: 'hazel',
              display_type: 'string',
              max_value: 100,
              trait_count: 7,
              order: 1,
            },
          ],
        },
        minter_address: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        last_token_uri_sync: 'string',
        last_metadata_sync: 'string',
        amount: '1',
        name: 'CryptoKitties',
        symbol: 'RARI',
      },
    },
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387a',
        tokenId: '15',
        media_items: 'true',
      },
      response: {
        token_address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
        token_id: '15',
        owner_of: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        token_hash: '502cee781b0fb40ea02508b21d319ced',
        block_number: '88256',
        block_number_minted: '88256',
        contract_type: 'ERC721',
        token_uri: 'string',
        metadata: '"{}"',
        minter_address: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        last_token_uri_sync: 'string',
        last_metadata_sync: 'string',
        amount: '1',
        name: 'CryptoKitties',
        symbol: 'RARI',
        possible_spam: false,
        media: {
          original_media_url: 'https://www.larvalabs.com/cryptopunks/cryptopunk015.png',
          status: 'processing',
          updatedAt: '2023-03-22T15:46:34.453Z',
        },
      },
    },
    {
      condition: {
        address: '0x4329d392754fd3ae7f4d252ef1b72b17dd6d79fe',
        tokenId: '15',
        media_items: 'true',
      },
      response: {
        token_address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
        token_id: '15',
        owner_of: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        token_hash: '502cee781b0fb40ea02508b21d319ced',
        block_number: '88256',
        block_number_minted: '88256',
        contract_type: 'ERC721',
        token_uri: 'string',
        metadata: '"{}"',
        minter_address: '0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b',
        last_token_uri_sync: 'string',
        last_metadata_sync: 'string',
        amount: '1',
        name: 'CryptoKitties',
        symbol: 'RARI',
        possible_spam: false,
        media: {
          media_collection: {
            low: {
              height: 100,
              width: 100,
              url: 'https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x78b818abb115a066f695dd07ca7833348633c212220895ac74a522c6453c3ef2/low.png',
            },
            medium: {
              height: 250,
              width: 250,
              url: 'https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x78b818abb115a066f695dd07ca7833348633c212220895ac74a522c6453c3ef2/medium.png',
            },
            high: {
              height: 500,
              width: 500,
              url: 'https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x78b818abb115a066f695dd07ca7833348633c212220895ac74a522c6453c3ef2/high.png',
            },
          },
          category: 'image',
          mimetype: 'image/png',
          parent_hash: '0x88a434cee5ebfcfaeb2723c3f18f4724228c2a82aad7d26af45ca11d8b6ed9a9',
          status: 'success',
          updatedAt: '2023-03-20T20:14:51.781Z',
          original_media_url: 'https://www.larvalabs.com/cryptopunks/cryptopunk015.png',
        },
      },
    },
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387',
        tokenId: '15',
      },
      responseStatus: 400,
      response: createErrorResponse('[C0005] Invalid address provided'),
    },
    {
      condition: {
        address: '0x75e3e9c92162e62000425c98769965a76c2e387a',
        tokenId: '000000215',
      },
      responseStatus: 400,
      response: createErrorResponse('[C0006] Request failed, Bad Request(400): [C0005] Invalid TokenId provided'),
    },
  ],
);
