const shuffle = require("./src/shuffleGenerator");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const flag = {
    PureArray: false,
    NoBracket: false,
    Number: null
}

loadArguments();

if (flag.Number) {
    outputResult(flag.Number);
} else {
    readline.question("Please input an Integer (>0):", (input) => {
        outputResult(input);
        readline.close();
    })
}

function loadArguments(){
    for (let i = 2; i < process.argv.length; i++) {
        let argv = process.argv[i];
        switch (argv) {
            case "-p":
                flag.PureArray = true;
                break;
            case "-n":
                flag.NoBracket = true;
                break;
            default:
                updateNumber(argv);
        }
    }
}

function outputResult(number) {
    let isValid = verifyInputFormat(number);
    if (isValid) {
        let randomArray = shuffle.generate(number);
        if (randomArray === null) { //case: zero
            notify();
        } else {
            outputWithFormat(randomArray);
        }
    } else {
        notify();
    }
}

function outputWithFormat(array) {
    let output = array.toString();
    if (!flag.NoBracket) {
        output = "[" + output + "]";
    }
    if (!flag.PureArray) {
        output = "Output:\n" + output;
    }
    console.log(output);
    process.exit(0);
}

function notify() {
    console.log("Please input a Non-Zero Positive Integers!");
    process.exit(0);
}

function verifyInputFormat(input) {
    let reg = /^\d*$/;
    let isValid = reg.test(input);
    return isValid;
}

function updateNumber(input) {
    if (verifyInputFormat(input)) {
        flag.Number = input;
    }
}
