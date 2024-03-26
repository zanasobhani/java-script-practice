const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein


    const obj1 = {
        FirstName: "Hans",
        LastName: "Müller",
        Old: "22"
    }
    const obj2 = {
        FirstName: "George",
        LastName: "Huber",
        Old: "37"
    }
    const obj3 = {
        FirstName: "Fritz",
        LastName: "Mayr",
        Old: "19"
    }

    const myArray=[obj1, obj2, obj3];

    const row = await prompt("Enter row of table :");
    const column = await prompt("Enter column name of table :");


    rowNr = parseInt(row)-1;


    switch (column) {
        case "FirstName":
            console.log(myArray[rowNr].FirstName);
            break;
        case "LastName":
            console.log(myArray[rowNr].LastName);
            break;
        case "old":
            console.log(myArray[rowNr].Old);
            break;
    }

    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());