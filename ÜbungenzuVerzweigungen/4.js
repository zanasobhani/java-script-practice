const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const dayNr = await prompt("Please enter your day number: ");
    let dayNumber = parseInt(dayNr);
    switch (dayNumber)
    {
        case 1:
            console.log("The day is Monday.");
            break;
        case 2:
            console.log("The day is Tuesday.");
            break;
        case 3:
            console.log("The day is Wednesday.");
            break;
        case 4:
            console.log("The day is Thursday.");
            break;
        case 5:
            console.log("The day is Friday.");
            break;
        case 6:
            console.log("The day is Sunday.");
            break;
        case 7:
            console.log("The day is Saturday.");
            break;

    }

    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());