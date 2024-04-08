const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const dayNr = await prompt("Please enter your day number: ");
    let dayNumber = parseInt(dayNr);
    if (dayNumber === 1) {
        console.log("The day is Monday.");
    } else if (dayNumber === 2) {
        console.log("The day is Tuesday.");
    } else if (dayNumber === 3) {
        console.log("The day is Wednesday.");
    } else if (dayNumber === 4) {
        console.log("The day is Thursday.");
    } else if (dayNumber === 5) {
        console.log("The day is Friday.");
    } else if (dayNumber === 6) {
        console.log("The day is Sunday.");
    } else if (dayNumber === 7) {
        console.log("The day is Saturday.");
    }

    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());