import * as dotenv from 'dotenv'
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

const MNEMONIC = process.env.MNEMONIC;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const FUJI_RPC_URL = process.env.FUJI_RPC_URL;
const MATIC_RPC_URL = process.env.MATIC_RPC_URL;
const POLYGONSCANAPIKEY = process.env.POLYGONSCANAPIKEY;

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    hardhat: {
      chainId: 31337
    },
    mumbai: {
      url: MUMBAI_RPC_URL !== undefined ? MUMBAI_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 80001
    },
    sepolia: {
      url: SEPOLIA_RPC_URL !== undefined ? SEPOLIA_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 11155111
    },
    fuji: {
      url: FUJI_RPC_URL !== undefined ? FUJI_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 43113
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 31337
    },
    matic: {
      url: MATIC_RPC_URL !== undefined ? MATIC_RPC_URL : '',
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 137
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCANAPIKEY !== undefined ? POLYGONSCANAPIKEY : '',
      polygon: POLYGONSCANAPIKEY !== undefined ? POLYGONSCANAPIKEY : '',
    }
  }
};

export default config;