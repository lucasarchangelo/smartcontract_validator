import { ExerciseConfig } from "./types";

export const exerciseConfig: ExerciseConfig = {
  "Endereço Smart Contract Register": {
    contractName: "Register",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: "getInfo" }],
  },
  "Endereço do Smart Contract RegisterAccess": {
    contractName: "RegisterAccess",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: "listInfo" }],
  },
  "Endereço do Token": {
    contractName: "Token",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: "decimals", expected: 2 }],
  },
  "Endereço do TokenShop": {
    contractName: "TokenShop",
    isOwnable: false,
    network: "sepolia",
    expectations: [{ method: "getChainlinkDataFeedLatestAnswer" }],
  },
};
