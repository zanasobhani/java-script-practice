const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    let fN = await prompt("Please enter your number: ");

    fN = parseFloat(fN);
    let r = (fN - Math.floor(fN)) !== 0;

    if (r===true) {
        console.log("The number is decimal.");
    } else if (fN % 2 !== 0) {
        console.log("The number is odd.")
    } else if (fN % 2 === 0) {
        console.log("The number is even.")
    }
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());