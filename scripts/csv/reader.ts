import csvToJson from "csvtojson";


export interface WorkshopAnswer {
    name: string;
    walletAddress: string;
    [key: string]: string;
}

export class WorkshopFeedback {
    name: string = "";
    walletAddress: string = ""
    owner: boolean = false;
    [key: string]: string | boolean | number;
}

export async function getCSVObject(): Promise<WorkshopAnswer[]> {
    const recipients = await csvToJson({
        trim:true
    }).fromFile('./workshopResults.csv');

    return recipients;
}