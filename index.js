const readline = require("readline");
const shuffle = require("./src/shuffle");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please input an Integer (>0):", (input) => {
    if (verifyInputFormat(input)) {
        outputResult(input);
    } else {
        notify();
    }
    rl.close();
})

function outputResult(number) {
    let randomArray = shuffle.generate(number);
    if (randomArray === null) {
        notify();
    } else {
        console.log("Output:\n[%s]", randomArray.toString());
    }
}

function notify() {
    console.log("Please input a Non-Zero Positive Integers!");
}

function verifyInputFormat(input) {
    let reg = /^\d*$/;
    let isValid = reg.test(input);
    return isValid;
}
