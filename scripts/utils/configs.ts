class Confg {
    contractName: string = "";
    isOwnable: boolean = false;
    validate: Array<string> = [];
}

interface IIndexable {
    [key: string]: Confg;
}

export const exerciseConfig: IIndexable = {
    exercise1: {
        contractName: "Test1",
        isOwnable: true,
        validate: ["readStore1"]
    },
    exercise2: {
        contractName: "Test2",
        isOwnable: true,
        validate: ["readStore2"]
    }
}

type Result = string | number;

type Functions = {
  [key: string]: () => Promise<Result>;
};

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