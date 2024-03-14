import { ethers } from "hardhat";

import { exerciseConfig, callFunctionByName } from "./utils/configs";
import { getCSVObject } from "./reader";


async function validateOwner(contractInstance: any, walletAddress: string) {
  const owner = await contractInstance.owner();
  if(owner !== walletAddress) {
    console.log("csvAnswerss: ", owner, walletAddress);
    console.log(`Owner isn't correct`);
  }
}

async function iterateExerciseConfig(record: any) {
  for await (const exercise of Object.keys(exerciseConfig)) {
    const contractInstance = (await ethers.getContractAt(exerciseConfig[exercise].contractName, record[exercise]));
    if(exerciseConfig[exercise].isOwnable) {
      validateOwner(contractInstance, record.walletAddress);
    }
    validateExercise(exercise, contractInstance);
  }
}

async function validateExercise(exercise: string, contractInstance: any) {
  for (const method of exerciseConfig[exercise].validate) {
    console.log(`Validating ${method} for ${exercise}`);
    const contractResponse = await callFunctionByName(contractInstance, method);
    console.log(`contractResponse of ${method} for ${exercise} is ${contractResponse}`);
  }
}

async function main() {
    const csvAnswers = await getCSVObject();

    for await (const record of csvAnswers) {
      iterateExerciseConfig(record);
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
