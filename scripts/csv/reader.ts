import csvToJson from "csvtojson";
import { WorkshopAnswer } from "../utils/configs";

export async function getCSVObject(): Promise<WorkshopAnswer[]> {
    const recipients = await csvToJson({
        trim:true
    }).fromFile('./workshopResults.csv');

    return recipients;
}