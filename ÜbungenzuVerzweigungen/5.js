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

    if (((65 <= cAscii) && (cAscii <= 90)) || ((97 <= cAscii) && (cAscii <= 122))) {
        switch (cAscii) {
            case 65 :
            case 97:
            case 111:
            case 85:
            case 117:
            case 73:
            case 105:
            case 69:
            case 101:
            case 79:
                console.log("The letter is vowel.");
                break;
            default:
                console.log("The letter is constant.");
                break;

            // Ende von eurem Code
        }
    } else {
        console.log("You have entered a character which is not letter.")
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());