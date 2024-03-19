const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    let fN = await prompt("Please enter your first number: ");
    let sN = await prompt("Please enter your second number: ");

    let op = await prompt("Please enter your  operator(+, -, *, /): ");

    switch (op)
    {
        case '+':
            console.log("The sum of two numbers is ",parseInt(fN)+parseInt(sN));
            break;
        case '-':
            console.log("The subtract of two numbers is ",parseInt(fN)-parseInt(sN));
            break;
        case '*':
            console.log("The multiple of two numbers is ",parseInt(fN)*parseInt(sN));
            break;
        case '/':
            console.log("The division of two numbers is ",parseInt(fN)/parseInt(sN));
            break;
        default:
            console.log("You entered unknown operators.");
            break;

    }


    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());