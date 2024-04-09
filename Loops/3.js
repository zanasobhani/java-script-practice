const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    let player1Nr;
    let player2Nr;
    let n=0;
    do {
        const firstNr = await prompt("Please enter a number between 1 and 100: ");
        player1Nr = parseInt(firstNr);
    } while (player1Nr < 1 || player1Nr > 100)

    console.clear();

    do {
        const secondNr = await prompt("Please enter your guess of player 1 number: ");
        player2Nr = parseInt(secondNr);
        n++;
        if(player2Nr>player1Nr)
            console.log("You entered bigger number of number's player1");
        else if(player2Nr<player1Nr)
            console.log("You entered smaller number of number's player1");
    } while (player2Nr!==player1Nr)

    console.log("Well done!");
    console.log("The number is ",player1Nr+" and you tried "+n+" times.")
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());