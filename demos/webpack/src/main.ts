import { MoralisClient } from '@moralisweb3/client';
import { FrontEndOnlyBackendAdapter } from '@moralisweb3/client-backend-adapter-frontend-only';
import { EIP1193EvmConnector, EIP1193Provider } from '@moralisweb3/client-connector-eip1193';
import { EvmConnector } from '@moralisweb3/client-evm-auth';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { MagicLinkEvmConnector } from '@moralisweb3/client-connector-magic-link';
import { WalletConnectEvmConnector } from '@moralisweb3/client-connector-wallet-connect';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { IWalletConnectProviderOptions } from '@walletconnect/types';

const MAGIC_CONNECT_PUBLISHABLE_API_KEY = process.env.MAGIC_CONNECT_PUBLISHABLE_API_KEY;
const WALLET_CONNECT_ETHEREUM_MAINNET_RPC = process.env.WALLET_CONNECT_ETHEREUM_MAINNET_RPC;

function validateMagicLinkApiKey() {
  if (!MAGIC_CONNECT_PUBLISHABLE_API_KEY) {
    alert('Please set MAGIC_CONNECT_PUBLISHABLE_API_KEY in .env file');
    return false;
  }

  return true;
}

async function reloadCurrentUser() {
  const userAddress = document.getElementById('userAddress') as HTMLElement;
  const userBalance = document.getElementById('userBalance') as HTMLElement;

  const users = await Promise.all([MoralisClient.EvmAuth.tryGetUser(), MoralisClient.SolAuth.tryGetUser()]);
  const user = users[0] || users[1];

  userAddress.innerText = user
    ? `address: ${user.address}, profileId: ${user.profileId || 'NOT_AUTHENTICATED'}`
    : `Unknown`;

  let balance: string | null = null;
  if (user) {
    try {
      switch (user.networkType) {
        case 'evm':
          const evmProvider = await MoralisClient.EvmAuth.restoreProvider();
          balance = String(await evmProvider.getBalance(user.address));
          break;

        case 'solana':
          const solProvider = await MoralisClient.SolAuth.restoreProvider();
          const publicKey = new PublicKey(solProvider.publicKey);

          const connection = new Connection(clusterApiUrl('devnet')); // Here we use devnet, but this code is only for example purposes.
          balance = String(await connection.getBalance(publicKey));
          break;
      }
    } catch (e) {
      console.error(e);
      balance = 'error';
    }
  }

  userBalance.innerText = balance ? balance : 'Unknown';
}

async function authenticate(wallet: string) {
  switch (wallet) {
    case 'metaMask':
      await MoralisClient.EvmAuth.authenticate();
      break;

    case 'walletConnect':
      await MoralisClient.EvmAuth.authenticate('walletConnect');
      break;

    case 'magicLink':
      if (validateMagicLinkApiKey()) {
        await MoralisClient.EvmAuth.authenticate('magicLink');
      }
      break;

    case 'EIP1193':
      await MoralisClient.EvmAuth.authenticate('EIP1193');
      break;

    case 'phantom':
      await MoralisClient.SolAuth.authenticate();
      break;
  }
}

async function connect(action: string) {
  switch (action) {
    case 'metaMask':
      await MoralisClient.EvmAuth.connect();
      break;

    case 'walletConnect':
      await MoralisClient.EvmAuth.connect('walletConnect');
      break;

    case 'magicLink':
      if (validateMagicLinkApiKey()) {
        await MoralisClient.EvmAuth.connect('magicLink');
      }
      break;

    case 'EIP1193':
      await MoralisClient.EvmAuth.connect('EIP1193');
      break;

    case 'phantom':
      await MoralisClient.SolAuth.connect();
      break;
  }
}

async function logOut() {
  const evmUser = await MoralisClient.EvmAuth.tryGetUser();
  if (evmUser) {
    await MoralisClient.EvmAuth.logOut();
    return;
  }
  const solUser = await MoralisClient.SolAuth.tryGetUser();
  if (solUser) {
    await MoralisClient.SolAuth.logOut();
    return;
  }
  alert('You are not logged in');
}

async function onButtonClicked(e: Event) {
  const action = (e.target as HTMLElement).getAttribute('data-action');
  const wallet = (e.target as HTMLElement).getAttribute('data-wallet');

  if (wallet === 'EIP1193') {
    if (!WALLET_CONNECT_ETHEREUM_MAINNET_RPC) {
      alert('Please set WALLET_CONNECT_ETHEREUM_MAINNET_RPC in .env file');
      return;
    } else if (!MoralisClient.EvmAuth.hasConnector('EIP1193')) {
      const walletConnectOptions: IWalletConnectProviderOptions = {
        rpc: {
          1: WALLET_CONNECT_ETHEREUM_MAINNET_RPC,
          25: 'https://evm-cronos.crypto.org',
          40: 'https://mainnet.telos.net/evm',
          56: 'https://rpc.ankr.com/bsc',
          89: 'https://polygon-rpc.com',
          42220: 'https://rpc.ankr.com/celo',
          42161: 'https://rpc.ankr.com/arbitrum',
          43114: 'https://api.avax.network/ext/bc/C/rpc',
        },
      };
      const walletConnectProvider = new WalletConnectProvider(walletConnectOptions);
      await walletConnectProvider.enable();

      const connector = EIP1193EvmConnector.create({
        provider: walletConnectProvider as any as EIP1193Provider,
        onDisconnect: () => {
          MoralisClient.EvmAuth.logOut().then(reloadCurrentUser).catch(console.error);
        },
        onChainChanged: () => {
          reloadCurrentUser().catch(console.error);
        },
        onAccountChanged: () => {
          reloadCurrentUser().catch(console.error);
        },
      });
      MoralisClient.EvmAuth.registerConnector('EIP1193', connector);
    }
  }

  switch (action) {
    case 'authenticate':
      await authenticate(wallet as string);
      break;

    case 'connect':
      await connect(wallet as string);
      break;

    case 'logOut':
      await logOut();
      break;
  }
  await reloadCurrentUser();
}

async function init() {
  const connectors: EvmConnector[] = [
    WalletConnectEvmConnector.create({
      rpc: {
        1: 'https://replace_me/',
      },
    }),
  ];
  if (MAGIC_CONNECT_PUBLISHABLE_API_KEY) {
    // Add magic link connector
    connectors.push(MagicLinkEvmConnector.create(MAGIC_CONNECT_PUBLISHABLE_API_KEY));
  }

  MoralisClient.start({
    backendAdapter: FrontEndOnlyBackendAdapter.create({
      publicApiKey: 'TODO_TODO',
    }),
    evmAuth: {
      connectors,
    },
  });

  const buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onButtonClicked);
  }
  await reloadCurrentUser();
}

document.addEventListener('DOMContentLoaded', init);
