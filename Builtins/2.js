const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    console.log(myFunc(1, 99,true));//true means that returned number is not decimal.
    console.log(myFunc(1, 99,false));
    function myFunc(min, max, check) {

        if (check === true)
            return Math.floor(Math.random() * (max - min + 1) + min);
        else
            return (Math.random() * (max - min + 1) + min);
    }

    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());