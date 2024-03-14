import { ethers } from "hardhat";
import { Contract } from "ethers";
import { exerciseConfig, callFunctionByName } from "./utils/configs";
import { getCSVObject, WorkshopAnswer, WorkshopFeedback } from "./csv/reader";
import { generateCSV } from "./csv/writer";

async function validateOwner(contractInstance: Contract, walletAddress: string, resultItem: WorkshopFeedback) {
  try {
    const owner = await contractInstance.owner();
    resultItem.owner = owner === walletAddress;
  } catch (error) {
    resultItem.owner = false;
  }
}

async function validateExercise(exercise: string, contractInstance: Contract, resultItem: WorkshopFeedback) {
  for (const method of exerciseConfig[exercise].validate) {
    console.log(`Validating ${method} for ${exercise}`);
    try {
      const contractResponse = await callFunctionByName(contractInstance, method);
      console.log(`contractResponse of ${method} for ${exercise} is ${contractResponse}`);
      resultItem[exercise] = true;
    } catch (error) {
      resultItem[exercise] = false;
    }

    // console.log("Result item from validadeExercise ", resultItem);
  }
}

async function iterateExerciseConfig(record: WorkshopAnswer, resultItem: WorkshopFeedback) {
  for await (const exercise of Object.keys(exerciseConfig)) {
    const contractInstance = await ethers.getContractAt(exerciseConfig[exercise].contractName, record[exercise]);
    if (exerciseConfig[exercise].isOwnable) {
      await validateOwner(contractInstance, record.walletAddress, resultItem);
    }
    await validateExercise(exercise, contractInstance, resultItem);
  }
}

async function main() {
  const csvAnswers = await getCSVObject();
  const result: WorkshopFeedback[] = [];

  for await (const record of csvAnswers) {
    let resultItem: WorkshopFeedback = new WorkshopFeedback();
    resultItem.name = record.name;
    resultItem.walletAddress = record.walletAddress;
    await iterateExerciseConfig(record, resultItem);
    result.push(resultItem);
  }
  
  generateCSV(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
