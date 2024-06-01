const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const myTable = [
        ["FirstName", "LastName", "Old"],
        ["Hans", "Müller", "22"],
        ["George", "Huber", "37"],
        ["Fritz", "Mayr", "19"],
    ];

    const row = await prompt("Enter row of table :");
    const column = await prompt("Enter column of table :");

    const rowNr = parseInt(row);
    const columnNr = parseInt(column) - 1;
    console.log(myTable[rowNr][columnNr]);
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());