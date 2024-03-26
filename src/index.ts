import hre from "hardhat";

import { getCVSObjectApply, getCVSObjectFeedback } from "./csv/reader";
import { WorkshopFeedback } from "./types";
import { workshopFeedbackFromAnswer } from "./utils/workshop";
import { generateCSV } from "./csv/writer";
import { validateContract } from "./validator";

async function runValidation() {
  const csvAnswers = await getCVSObjectApply();
  let result: WorkshopFeedback[] = [];

  if (hre.network.name === "fuji") {
    result = await getCVSObjectFeedback();
  }

  for await (const answer of csvAnswers) {
    console.info(`Validating user ${answer["Email Address"]} with wallet ${answer["Endereço Account1 da Carteira"]}`);
    let feedback = result.find((item) => item.name === answer["Email Address"]) || workshopFeedbackFromAnswer(answer);
    console.info("Feedback: ", feedback);
    await validateContract(answer, feedback);
    if (hre.network.name !== "fuji") {
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
