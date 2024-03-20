export type Result = string | number;

export type Functions = Record<string, () => Promise<Result>>;
export type ExerciseConfig = Record<string, ValidationConfig>;

export interface ValidationConfig {
  contractName: string;
  isOwnable: boolean;
  network: string;
  expectations: MethodExpectation[];
}

export type MethodExpectation = {
  method: string;
  expected?: Result;
};

export interface Ownable {
  hasOwner: boolean;
}

/**
 * I extrapolated a name here, but it could be named something else, `WalletIdentifier`
 * or something entirely different
 */
export interface Wallet {
  name: string;
  address: string;
}


export type WorkshopAnswer = Wallet & Record<string, string>;
export type WorkshopFeedback = Wallet & Record<string, string | boolean | number>;
