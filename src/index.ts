import hre from "hardhat";

import { getCVSObjectApply, getCVSObjectFeedback } from "./csv/reader";
import { WorkshopFeedback } from "./types";
import { workshopFeedbackFromAnswer } from "./utils/workshop";
import { generateCSV } from "./csv/writer";
import { validateContract } from "./validator";

async function runValidation() {
  const csvAnswers = await getCVSObjectApply();
  let result: WorkshopFeedback[] = [];

  if (hre.network.name === "fuji" || hre.network.name === "mumbai") {
    result = await getCVSObjectFeedback();
  }

  for await (const answer of csvAnswers) {
    console.info(`Validating user ${answer["Wallet Account1 Address"]}`);
    let feedback = result.find((item) => item.address === answer["Wallet Account1 Address"]) || workshopFeedbackFromAnswer(answer);
    await validateContract(answer, feedback);
    if (hre.network.name !== "fuji" && hre.network.name !== "mumbai") {
      result.push(feedback);
    }
  }

  console.info("Validation finished");
  console.info(generateCSV(result));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
runValidation().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
