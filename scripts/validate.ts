import { ethers } from "hardhat";
import { Contract } from "ethers";
import { exerciseConfig, callFunctionByName, WorkshopAnswer, WorkshopFeedback } from "./utils/configs";
import { getCSVObject } from "./csv/reader";
import { generateCSV } from "./csv/writer";

function checkContractResponse(contractResponse: string | number, expected: string | number | undefined) {
  if (expected && contractResponse.toString() !== expected.toString()) {
    throw new Error(`Contract response ${contractResponse} is not equal to expected ${expected}`);
  }
}

async function validateOwner(contractInstance: Contract, walletAddress: string, resultItem: WorkshopFeedback) {
  try {
    const owner = await contractInstance.owner();
    resultItem.owner = owner === walletAddress;
  } catch (error) {
    resultItem.owner = false;
  }
}

async function validateExercise(exercise: string, contractInstance: Contract, resultItem: WorkshopFeedback) {
  for (const validate of exerciseConfig[exercise].validate) {
    try {
      const contractResponse = await callFunctionByName(contractInstance, validate.method);
      checkContractResponse(contractResponse, validate.expected);
      resultItem[exercise] = true;
    } catch (error) {
      console.log(`Error validating ${validate.method} for ${exercise}: ${error}`);
      resultItem[exercise] = false;
    }
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
    console.info(`Validating user ${record.name} with wallet ${record.walletAddress}`);
    let resultItem: WorkshopFeedback = new WorkshopFeedback();
    resultItem.name = record.name;
    resultItem.walletAddress = record.walletAddress;
    await iterateExerciseConfig(record, resultItem);
    result.push(resultItem);
  }

  console.info("Validation finished")
  console.info(generateCSV(result));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
