
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const  myArray=["Monday","Tuesday","Wednesday","Thursday",
    "Friday","Saturday","Sunday"]

    const day = await prompt("Please enter your number(1-7): ");
    console.log("Your day is ",myArray[parseInt(day)-1]);



    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());