import { json2csv } from "json-2-csv";
import { WorkshopFeedback } from "../types";
import  fs  from "fs";

export function generateCSV(data: WorkshopFeedback[]): string {
  const output = json2csv(data);
  if (fs.existsSync('./feedback.csv')) {
    fs.rmSync('./feedback.csv');
  }
  fs.writeFileSync('./feedback.csv', output);
  return output;
}
