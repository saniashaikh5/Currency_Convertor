#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

console.log(chalk.bgMagenta.bold("\n \tWELCOME TO CURRENCY CONVERTER\n"));

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.cyanBright("Enter Your Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: chalk.bgCyanBright("Enter To Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: chalk.bgCyanBright("Enter your amount"),
        type: "number"
    }
]);

let userFromcurrency = user_answer.from
let userTocurrency = user_answer.to
let fromAmount = currency[userFromcurrency]
let toAmount = currency[userTocurrency]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAMOunt = baseAmount * toAmount
console.log(convertedAMOunt);