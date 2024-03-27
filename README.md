# Blockchain Validator

This repository contains a tool designed to validate all the received blockchain deployed contracts that students executed during the Chainlink Labs Bootcamp. 

## Installation

To use this validator, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/lucasarchangelo/blockchain_validator.git
   ```

2. Navigate into the cloned repository:
   ```
   cd blockchain_validator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Configure the validation parameters:
   Edit the `src/config.ts` file to set up the validation configurations. The structure of this file should follow the format below:

   ```typescript
   export interface ValidationConfig {
     contractName: string;
     isOwnable: boolean;
     network: string;
     expectations: MethodExpectation[];
   }
   ```

   For each CSV column that you want to validate, create a `ValidationConfig` object in `config.ts`.

5. Place the CSV file you want to validate in the root directory of the repository, using the name `Bootcamp_apply.csv`.

## Usage

Once you have configured the validation parameters and placed the CSV file, you can run the validation command:

```
npm run validate_csv_sepolia
```

This command will execute the validation process using the provided CSV file and the configurations set in `config.ts`.

## Notes

- Ensure that the CSV file follows the required format for validation.
- Review the validation configurations in `config.ts` carefully to match your specific use case.
- Make sure you have Node.js and npm installed on your system before running the validator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Disclaimer:** This repository is not affiliated with Chainlink Labs or any educational institution. It is solely intended for educational and demonstration purposes.
