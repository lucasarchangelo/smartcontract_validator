import csvToJson from "csvtojson";
import { WorkshopAnswer, WorkshopFeedback } from "../types";

export async function getCVSObjectApply(): Promise<WorkshopAnswer[]> {
  return csvToJson({ trim: true }).fromFile("./Bootcamp_apply.csv");
}

export async function getCVSObjectFeedback(): Promise<WorkshopFeedback[]> {
  return csvToJson({ trim: true }).fromFile("./feedback.csv");
}
