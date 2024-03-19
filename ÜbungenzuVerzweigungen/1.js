const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const myPass="SalamMarkus";

    const passUser = await prompt("Please enter your password: ");

    if(myPass===passUser)
    {
        console.log("Ture password");
    }else
    {
        console.log("Wrong password");
    }



    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());