import { ethers } from "hardhat";
import { Contract } from "ethers";
import { WorkshopAnswer, WorkshopFeedback } from "./types";
import { exerciseConfig } from "./config";
import { callFunctionByName } from "./utils/common";

const checkContractResponse = (
  contractResponse: string | number,
  expected: string | number | undefined,
) => {
  if (expected && contractResponse.toString() !== expected.toString()) {
    throw new Error(`Contract response ${contractResponse} is not equal to expected ${expected}`);
  }
};

const validateOwner = async (
  contract: Contract,
  walletAddress: string,
  exercise: string,
  feedback: WorkshopFeedback,
) => {
  try {
    const owner = await contract.owner();
    feedback[exercise] = owner === walletAddress;
  } catch (error) {
    feedback[exercise] = false;
  }
};

const validateExercise = async (
  exercise: string,
  contractInstance: Contract,
  feedback: WorkshopFeedback,
) => {
  for (const expectation of exerciseConfig[exercise].expectations) {
    try {
      const contractResponse = await callFunctionByName(contractInstance, expectation.method);
      checkContractResponse(contractResponse, expectation.expected);
      feedback[exercise] = true;
    } catch (error) {
      console.log(`Error validating ${expectation.method} for ${exercise}: ${error}`);
      feedback[exercise] = false;
      return;
    }
  }
};

export const validateContract = async (answer: WorkshopAnswer, feedback: WorkshopFeedback) => {
  for await (const exercise of Object.keys(exerciseConfig)) {
    if (answer[exercise]) {
      const contractInstance = await ethers.getContractAt(
        exerciseConfig[exercise].contractName,
        answer[exercise],
      );
      if (exerciseConfig[exercise].isOwnable) {
        await validateOwner(contractInstance, answer.address, exercise, feedback);
      } else {
        feedback[exercise] = true;
      }
      if (feedback[exercise]) {
        await validateExercise(exercise, contractInstance, feedback);
      }
    } else {
      feedback[exercise] = false;
    }
  }
};
