type Result = string | number;

type Functions = {
  [key: string]: () => Promise<Result>;
};

interface IIndexable {
  [key: string]: Confg;
}

class Confg {
  contractName: string = "";
  isOwnable: boolean = false;
  validate: Array<ValidateObject> = [];
}

type ValidateObject = {method: string, expected?: Result};

export interface WorkshopAnswer {
  name: string;
  walletAddress: string;
  [key: string]: string;
}

export class WorkshopFeedback {
  name: string = "";
  walletAddress: string = ""
  owner: boolean = false;
  [key: string]: string | boolean | number;
}

export async function callFunctionByName(
  target: Functions,
  functionName: string
): Promise<Result> {
  const func = target[functionName];
  if (func) {
    return func();
  } else {
    throw new Error(`Function ${functionName} not found`);
  }
}

export const exerciseConfig: IIndexable = {
  exercise1: {
      contractName: "Test1",
      isOwnable: true,
      validate: [{method: "readStore1", expected: 0}]
  },
  exercise2: {
      contractName: "Test2",
      isOwnable: true,
      validate: [{method: "readStore2"}]
  }
}