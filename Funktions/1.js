
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    function isEven(a){

        if(a%2===0)
        {
            return true
        }else {
            return  false
        }
    }

    console.log(isEven(2))


    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());