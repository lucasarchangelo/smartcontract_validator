import csvToJson from "csvtojson";


interface WorkshopAnswer {
    name: string;
    walletAddress: string;
    [key: string]: string;
}

export async function getCSVObject(): Promise<WorkshopAnswer[]> {
    const recipients = await csvToJson({
        trim:true
    }).fromFile('./workshopResults.csv');

    return recipients;
}