const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const temperature = await prompt("Please enter temperature : ");

    if (temperature <= 0) {
        console.log("The weather is cold.");

    } else if (temperature <= 18) {

        console.log("The weather is pleasant.")
    } else {
        console.log("The weather is hot.")
    }

    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());