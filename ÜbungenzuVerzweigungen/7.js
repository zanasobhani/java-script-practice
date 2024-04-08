const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    let fN = await prompt("Please enter your first number: ");
    let sN = await prompt("Please enter your second number: ");
    let tN = await prompt("Please enter your third number: ");
    let foN = await prompt("Please enter your fourth number: ");

    fN=parseInt(fN);
    sN=parseInt(sN);
    tN=parseInt(tN);
    foN=parseInt(foN);

    let fBigger = fN >= sN ? fN : sN;
    let sBigger=fBigger>=tN ? fBigger:tN;
    let lBigger=sBigger>=foN ? sBigger:foN;

    console.log("The Biggest one is",lBigger);








    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());