const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const myArray = [4, 6, 2, 99, 0, 3, 2];

    console.log("This is original array(not sorted):");
    console.log(myArray.join(' '));
    for (let j = 0; j < myArray.length; j++) {
        for (let i = 0; i < myArray.length - 1; i++) {
            if (myArray[i] > myArray[i + 1]) {
                let temp;
                temp = myArray[i + 1];
                myArray[i + 1] = myArray[i];
                myArray[i] = temp;
            }
        }
    }
    console.log("This is sorted array:");
    console.log(myArray.join(' '));


    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());