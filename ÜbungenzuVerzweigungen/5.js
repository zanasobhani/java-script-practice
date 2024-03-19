const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let c;
    let cAscii;
    do {
        c = await prompt("Please enter your character: ");
    } while (c.length !== 1)

    cAscii = c.charCodeAt(0);

    switch (cAscii) {
        case 65 :
            console.log("The letter is vowel.");
            break;
        case 97:
            console.log("The letter is vowel.");
            break;
        case 79:
            console.log("The letter is vowel.");
            break;
        case 111:
            console.log("The letter is vowel.");
            break;
        case 85:
            console.log("The letter is vowel.");
            break;
        case 117:
            console.log("The letter is vowel.");
            break;
        case 73:
            console.log("The letter is vowel.");
            break;
        case 105:
            console.log("The letter is vowel.");
            break;
        case 69:
            console.log("The letter is vowel.");
            break;
        case 101:
            console.log("The letter is vowel.");
            break;
        default:
            console.log("The letter is constant.");
            break;

        // Ende von eurem Code
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());