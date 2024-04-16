
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


fs.readFile("myFile.json", 'utf8', async (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            data = '[]';
        } else {
            console.error('Error reading file:', err);
            return;
        }
    }

    let products = JSON.parse(data);

    function addData() {
        rl.question('Enter product number: ', (number) => {
            rl.question('Enter product name: ', (name) => {
                rl.question('Enter product price: ', (price) => {
                    const product = { number, name, price };
                    products.push(product);
                    console.log('Product added successfully!');
                    askNextAction();
                });
            });
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

    function saveAndExit() {
        const newData = JSON.stringify(products, null, 2);
        fs.writeFile("myFile.json", newData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Data saved successfully. Exiting...');
            }
            rl.close();
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

    askNextAction();
});
