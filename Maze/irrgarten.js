const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const p = {x: 0, y: 4};
    const t = {x: 6, y: 1};
    const pC = {x: 0, y: 4};
    //const tC = {x: 0, y: 0};
    let userC;

    const playField = [
        ["#", "#", "#", "#", " ", "#", "#"],
        ["#", "#", "#", " ", " ", "#", "#"],
        ["#", "H", " ", " ", "#", "#", "#"],
        ["#", "#", "#", " ", "#", "#", "#"],
        ["#", "#", " ", " ", "#", "#", "#"],
        ["#", "#", " ", "#", "#", "#", "#"],
        ["#", " ", " ", "#", "#", "#", "#"]
    ]
    playField[p.x][p.y] = "x";
    playField[t.x][t.y] = "O";
    do {

        mapDraw();

        userC = await prompt("Please select your direction(left l,right r,up u,down d):");

        switch (userC) {

            case "l":
                pC.y = pC.y - 1;
                break;
            case "r":
                pC.y = pC.y + 1;
                break;
            case "u":
                pC.x = pC.x - 1;
                break;
            case "d":
                pC.x = pC.x + 1;
                break;

        }

        if ((0 <= pC.x) && (pC.x <= 6) && (0 <= pC.y) && (pC.y <= 6)) {

            if (playField[pC.x][pC.y] === " ") {

                playField[p.x][p.y] = " ";
                p.x = pC.x;
                p.y = pC.y;
                playField[p.x][p.y] = "x";


            } else {
                if (playField[pC.x][pC.y] === "O") {
                    console.log("You got it!!!!!");
                    playField[p.x][p.y] = " ";
                    p.x = pC.x;
                    p.y = pC.y;
                    playField[p.x][p.y] = "x";
                    mapDraw();
                    console.log("Game over!");
                    userC = "x";
                } else {
                    if (playField[pC.x][pC.y] === "H") {
                        console.log("You lost !!!!!");
                        playField[p.x][p.y] = " ";
                        p.x = pC.x;
                        p.y = pC.y;
                        playField[p.x][p.y] = "x";
                        mapDraw();
                        console.log("Game over!");
                        userC = "x";
                    } else {
                        switch (userC) {

                            case "l":
                                pC.y = pC.y + 1;
                                break;
                            case "r":
                                pC.y = pC.y - 1;
                                break;
                            case "u":
                                pC.x = pC.x + 1;
                                break;
                            case "d":
                                pC.x = pC.x - 1;
                                break;
                        }
                    }
                }
            }
            }
        else
            {
                switch (userC) {

                    case "l":
                        pC.y = pC.y + 1;
                        break;
                    case "r":
                        pC.y = pC.y - 1;
                        break;
                    case "u":
                        pC.x = pC.x + 1;
                        break;
                    case "d":
                        pC.x = pC.x - 1;
                        break;

                }
            }

        }
        while (userC !== "x")


            function mapDraw() {

                for (let row of playField) {
                    console.log(row.join(""));
                }
            }
    }


        execute().catch((err) => {
            console.error(err);
        }).finally(() => rl.close());