
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

     isEven=(a) =>{
        if(a%2===0)
        {
            return true
        }else {
            return  false
        }
    }

    console.log(isEven(5))


    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());