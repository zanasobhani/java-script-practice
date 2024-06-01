import {readFileSync, writeFileSync} from 'node:fs';
import * as readline from "readline";

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
let charUser;
let myArray = [];
let myData;

try {
    myData = JSON.parse(readFileSync("data.json", "utf8"));
} catch (e) {
    myData = [];
}


async function execute() {
    do {
        charUser = await prompt("What would you like to do(a :add,f :find,x :save and exit)?");
        switch (charUser) {
            case "a":
                let numberProduct = await prompt("Enter the number of product:");
                let nameProduct = await prompt("Enter the name of product:");
                let priceProduct = await prompt("Enter the price of product:");
                let objProduct = {
                    number: numberProduct,
                    name: nameProduct,
                    price: priceProduct
                };
                myArray.push(objProduct);
                myData = myArray.concat(myData);
                myArray = [];
                break;

            case "f":
                let numberProductS = await prompt("Enter the number of product:");
                if ((myData.find(obj => obj.number === numberProductS)) !== undefined) {
                    console.log(myData.find(obj => obj.number === numberProductS));
                } else {
                    console.log("Does not exist!")
                }
                break;
        }


    } while (charUser !== 'x') ;

    const newData = JSON.stringify(myData, null, 2);

    try {
        writeFileSync("data.json", newData,'utf8');
        console.log('File successfully saved.');
        rl.close();
    }catch (e) {
        console.error('Error writing file');
        rl.close();
    }
}


execute().catch((err) => {
    console.error(err);
})//.finally(() => rl.close());