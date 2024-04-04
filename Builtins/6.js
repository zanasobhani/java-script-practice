const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let myString = await prompt("Enter your string of binary number: ");
    let myNumber = parseInt(myString);
    myNumber = parseInt(myNumber, 2);
    console.log(myNumber);
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());