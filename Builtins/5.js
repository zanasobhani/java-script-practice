const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const myObject = {
        name: "Sara",
        familyName: "Boss",
        age: 29,
        address: "Hauptplatz",
        city: "Linz",
        code: 4040
    }
    const myJSON = JSON.stringify(myObject);
    console.log(myJSON);
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());