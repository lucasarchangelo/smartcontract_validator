import { ExerciseConfig } from "./types";

export const exerciseConfig: ExerciseConfig = {
  "Register Smart Contract Address": {
    contractName: "Register",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getInfo" } }],
  },
  "RegisterAccess Smart Contract Address": {
    contractName: "RegisterAccess",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "listInfo" } }],
  },
  "Token Address": {
    contractName: "Token",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "decimals" }, expected: 2 }],
  },
  "TokenShop Address": {
    contractName: "TokenShop",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getChainlinkDataFeedLatestAnswer" } }],
  },
  "TransferUSDCBasic Address": {
    contractName: "TransferUSDCBasic",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "allowanceUsdc" } }],
  },
  // "Flower Address": {
  //   contractName: "Flower",
  //   isOwnable: false,
  //   network: "sepolia",
  //   expectations: [{ method: { name: "tokenURI", args:[0] } }],
  // },
  // "CrossDestinationMinter address": {
  //   contractName: "CrossDestinationMinter",
  //   isOwnable: false,
  //   network: "sepolia",
  //   expectations: [{ method: { name: "getRouter"} }],
  // },
  "MintOnSepolia Transaction ID": {
    contractName: "CrossSourceMinter",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "router"}}],
  },
  "CrossSourceMinterMumbai address": {
    contractName: "CrossSourceMinter",
    isOwnable: false,
    network: "mumbai",
    expectations: [{ method: { name: "router"}}, { method: { name: "linkToken"}}],
  },
  // "NFT Runners address": {
  //   contractName: "Runners",
  //   isOwnable: false,
  //   network: "fuji",
  //   expectations: [{ method: { name: "lastRequestId"}}],
  // },
  // "GettingStartedFunctionsConsumer address": {
  //   contractName: "GettingStartedFunctionsConsumer",
  //   isOwnable: false,
  //   network: "fuji",
  //   expectations: [{ method: { name: "character"}}],
  // },
  "Your transaction in the Bootcamp's WeatherFunctions": {
    contractName: "WeatherFunctions",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "subscriptionId"}}],
  },
};
