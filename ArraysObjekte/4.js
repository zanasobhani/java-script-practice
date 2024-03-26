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

    const myC = {
        FirstName: 0,
        LastName: 1,
        Old: 2
    }

    const row = await prompt("Enter row of table :");
    const column = await prompt("Enter column name of table :");

    rowNr = parseInt(row);
    let columnNr;
    switch (column) {
        case "FirstName":
            columnNr = myC.FirstName;
            break;
        case "LastName":
            columnNr = myC.LastName;
            break;
        case "Old":
            columnNr = myC.Old;
            break;
    }

    console.log(myTable[rowNr][columnNr]);
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());