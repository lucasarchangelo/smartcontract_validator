import csvToJson from "csvtojson";
import { WorkshopAnswer } from "../types";

export async function getCSVObject(): Promise<WorkshopAnswer[]> {
  return csvToJson({ trim: true }).fromFile("./Bootcamp_apply.csv");
}
