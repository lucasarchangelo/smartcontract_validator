import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { exerciseConfig } from "./utils/abis";

type WorkshopAnswer = {
  name: string;
  walletAddress: string;
  exercise1: string;
  exercise2: string;
  exercise3: string;
  exercise4: string;
  exercise5: string;
  exercise6: string;
  exercise7: string;
  exercise8: string;
  exercise9: string;
  exercise10: string;

};

async function main() {
  const signers = await ethers.getSigners();
  const csvFilePath = path.resolve(__dirname, '../CSVS/workshopResults.csv');
  const headers = [{contractName: 'Test1', exercise: 'exercise1'}, {contractName: 'Test2', exercise: 'exercise2'}];
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  parse(fileContent, {
    delimiter: ',',
    columns: true,
  }, async (error, result: WorkshopAnswer[]) => {

    for await (const record of result) {
      
      
      for await ( const header of headers) {
        for await (const method of exerciseConfig[header.exercise]._validate) {
          const test = (await ethers.getContractAt(header.contractName, (record as any)[header.exercise]) as any);
          console.log(`Validating ${method} for ${header.exercise}`);
          const result = await test[method]();
          console.log(`Result of ${method} for ${header.exercise} is ${result}`);
        }
      }

    }

    if (error) {
      console.error(error);
    }
  });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
