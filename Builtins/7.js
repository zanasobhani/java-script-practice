const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let myVariable = "Hello World!";
    let name=await prompt("Enter your name:");
    let newVariable=myVariable.replace("World",name);
    console.log(newVariable);
    console.log("Your length text is "+newVariable.length+" and first letter is "
        +newVariable.charAt(0)+".");
    const myArray=newVariable.split(" ");

    console.log(myArray);
    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());