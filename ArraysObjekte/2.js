const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein

    const car = {
        brand: "Porsche",
        model: "Cayman 718",
        horsePower: 113,
        color: "White",
        price: "900.000 euro",
    };
    console.log("Features my favourite: ");
    console.log("Name is ",car.brand);
    console.log("Model is ",car.model);
    console.log("Power is ",car.horsePower);
    console.log("Color is ",car.color);
    console.log("Prise is ",car.price);

    // Ende von eurem Code
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());