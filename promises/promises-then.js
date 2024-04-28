const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let products;
fs.readFile("myFile.json", 'utf8')
    .then(data => {


        askNextAction();
    })
    .catch(error => {

        if (error.code === 'ENOENT') {
            products = [];
            creatFile();
        } else {
            console.error('Error reading file:', error);
            throw error;
        }

    });

function creatFile() {
    products = [];
    const newData = JSON.stringify(products, null, 2);
    fs.writeFile("myFile.json", newData)
        .then(() => {
            askNextAction();
        })
        .catch(error => {
            console.error('Error writing file:', error);
            rl.close();
        });
}

function saveAndExit() {
    const newData = JSON.stringify(products, null, 2);
    fs.writeFile("myFile.json", newData)
        .then(() => {
            console.log('Data saved successfully. Exiting...');
            rl.close();
        })
        .catch(error => {
            console.error('Error writing file:', error);
            rl.close();
        });
}

function findData() {
    rl.question('Enter product number to find: ', (number) => {
        const foundProduct = products.find(product => product.number === number);
        if (foundProduct) {
            console.log('Found Product:', foundProduct);
        } else {
            console.log('Product not found.');
        }
        askNextAction();
    });
}

function askNextAction() {
    rl.question('What would you like to do? (a: add data, f: find data, x: save and exit): ', (choice) => {
        switch (choice) {
            case 'a':
                addData();
                break;
            case 'f':
                findData();
                break;
            case 'x':
                saveAndExit();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                askNextAction();
                break;
        }
    });
}

function addData() {
    rl.question('Enter product number: ', (number) => {
        rl.question('Enter product name: ', (name) => {
            rl.question('Enter product price: ', (price) => {
                const product = {number, name, price};
               try {
                   products.push(product);
                   console.log('Product added successfully!');
                   askNextAction();
               }
               catch (err)
               {
                   saveAndExit();
               }
            });
        });
    });
}