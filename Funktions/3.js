const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    function myFunc(...args) {


        if (args.length <= 4) {
            let max = args[0];
            for (arg of args) {
                if (arg > max) {
                    max = arg;
                }
            }
            console.log(max);

        } else {
            console.log("The number of argument should be maximum four.");
        }

    }

    myFunc(12,3,3,38,4);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());