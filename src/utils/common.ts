import { Functions, Result } from "../types";

export async function callFunctionByName(target: Functions, functionName: string): Promise<Result> {
  const func = target[functionName];
  if (func) {
    return func();
  } else {
    throw new Error(`Function ${functionName} not found`);
  }
}
