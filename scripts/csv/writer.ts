import { json2csv } from 'json-2-csv';
import { WorkshopFeedback } from './reader';

export function generateCSV(data: WorkshopFeedback[]): string {
    return json2csv(data);
}