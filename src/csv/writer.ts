import { json2csv } from "json-2-csv";
import { WorkshopFeedback } from "../types";
import  fs  from "fs";

export function generateCSV(data: WorkshopFeedback[]): string {
  const output = json2csv(data);
  fs.writeFileSync('./feedback.csv', output);
  return output;
}
