const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    const days = ["Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayNr;
    do {
        const day = await prompt("Please enter your day(a number of 1-7): ");
        dayNr = parseInt(day);
    } while (dayNr < 1 || dayNr > 7);

    console.log("Your day is " + days[dayNr - 1]);

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());