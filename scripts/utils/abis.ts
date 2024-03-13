export class Confg {
    contractName: string = "";
    _validate: Array<string> = [];
}

export interface IIndexable {
    [key: string]: Confg;
}

export const exerciseConfig: IIndexable = {
    exercise1: {
        contractName: "Test1",
        _validate: ["owner", "readStore1"]
    },
    exercise2: {
        contractName: "Test2",
        _validate: ["owner", "readStore2"]
    }
}