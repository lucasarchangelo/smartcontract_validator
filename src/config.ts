import { ExerciseConfig } from "./types";

export const exerciseConfig: ExerciseConfig = {
  exercise1: {
    contractName: "Test1",
    isOwnable: true,
    expectations: [{ method: "readStore1", expected: 0 }],
  },
  exercise2: {
    contractName: "Test2",
    isOwnable: true,
    expectations: [{ method: "readStore2" }],
  },
};
