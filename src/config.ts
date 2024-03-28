import { ExerciseConfig } from "./types";

export const exerciseConfig: ExerciseConfig = {
  "Endereço Smart Contract Register": {
    contractName: "Register",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getInfo" } }],
  },
  "Endereço do Smart Contract RegisterAccess": {
    contractName: "RegisterAccess",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "listInfo" } }],
  },
  "Endereço do Token": {
    contractName: "Token",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "decimals" }, expected: 2 }],
  },
  "Endereço do TokenShop": {
    contractName: "TokenShop",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getChainlinkDataFeedLatestAnswer" } }],
  },
  "Endereço PhotoAlbum": {
    contractName: "PhotoAlbum",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "checkUpkeep", args:["0x"] } }],
  },
  "Endereço CrossChainPriceNFT": {
    contractName: "CrossChainPriceNFT",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getChainlinkDataFeedLatestAnswer"} }],
  },
  "Endereço CrossDestinationMinter": {
    contractName: "CrossDestinationMinter",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: { name: "getRouter"} }],
  },
  "Endereço do Smart Contract WeatherFunctions": {
    contractName: "WeatherFunctions",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "subscriptionId"}}],
  },
  "Endereço do Smart Contract TemperatureFunctions": {
    contractName: "TemperatureFunctions",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "s_subscriptionId"}}],
  },
  "Endereço NFT Runners": {
    contractName: "Runners",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "lastRequestId"}}],
  },
  "Endereço do Smart Contract GettingStartedFunctionsConsumer": {
    contractName: "GettingStartedFunctionsConsumer",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "character"}}],
  },
  "Endereço CrossSourceMinter": {
    contractName: "CrossSourceMinter",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "router"}}, { method: { name: "linkToken"}}],
  },
  "Endereço CCIPTokenSenderFujiSepolia": {
    contractName: "CCIPTokenSenderFujiSepolia",
    isOwnable: false,
    network: "fuji",
    expectations: [{ method: { name: "owner" } }],
  },
};
