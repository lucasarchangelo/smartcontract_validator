export class Confg {
    _abi: string = "";
    _validate: Array<string> = [];
}

export interface IIndexable {
    [key: string]: Confg;
}

export const exerciseConfig: IIndexable = {
    exercise1: {
        _abi: "",
        _validate: ["owner", "readStore1"]
    },
    exercise2: {
        _abi: "",
        _validate: ["owner", "readStore2"]
    }
}