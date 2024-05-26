import csvToJson from "csvtojson";
import { WorkshopAnswer, WorkshopFeedback } from "../types";

export async function getCVSObjectApply(): Promise<WorkshopAnswer[]> {
  return csvToJson({ trim: true, delimiter: "," }).fromFile("./Bootcamp 2024-04 amostra.csv");
}

export async function getCVSObjectFeedback(): Promise<WorkshopFeedback[]> {
  return csvToJson({ trim: true, delimiter: "," }).fromFile("./feedback.csv");
}
