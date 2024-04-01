const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    const myArray = [
        obj1 = {
            name: "Sara",
            age: 22
        },
        obj2 = {
            name: "Niki",
            age: 30
        },
        obj3 = {
            name: "Pedro",
            age: 34
        },
        obj4 = {
            name: "Pedi",
            age: 23
        }
    ];

    for(let obj of myArray)
    {
        console.log(obj.name +" "+obj.age+" years old.");
    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());