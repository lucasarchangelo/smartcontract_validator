import { getCSVObject } from "./csv/reader";
import { WorkshopFeedback } from "./types";
import { workshopFeedbackFromAnswer } from "./utils/workshop";
import { generateCSV } from "./csv/writer";
import { validateContract } from "./validator";

async function runValidation() {
  const csvAnswers = await getCSVObject();
  console.log(csvAnswers);
  const result: WorkshopFeedback[] = [];

  for await (const answer of csvAnswers) {
    console.info(`Validating user ${answer["Email Address"]} with wallet ${answer["Endereço Account1 da Carteira"]}`);
    let feedback = workshopFeedbackFromAnswer(answer);

    await validateContract(answer, feedback);
    result.push(feedback);
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
