import { Functions, Method, Result } from "../types";

export async function callFunctionByName(target: Functions, fun: Method): Promise<Result> {
  const func = target[fun.name];
  if (func) {
    if(fun.args) return func(...fun.args);
    return func();
  } else {
    throw new Error(`Function ${fun.name} not found`);
  }
}
