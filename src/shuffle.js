const _ = require("lodash");

module.exports = {
    generate: function (length) {
        let array = null;
        if (length <= 0) {
            return array;
        } else {
            array = fillRandoms(length);
            return array;
        }
    }
}

fillRandoms = function (length) {
    let numberStack = fillNumbers(length);
    let array = [];
    let popped;
    for (let i = 0; i < length; i++) {
        popped = popOutRandomly(numberStack);
        array.push(popped);
    }
    return array;
}

/**
 * Mutate Arrays
 */
popOutRandomly = function (array) {
    let index = _.random(0, array.length - 1);
    this.swap(array, index, array.length - 1);
    let popped = array.pop();
    return popped;
}

fillNumbers = function (length) {
    let array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = i + 1;
    }
    return array;
}

/**
 * Mutate Arrays
 */
swap = function (array, xIndex, yIndex) {
    let temp = array[xIndex];
    array[xIndex] = array[yIndex];
    array[yIndex] = temp;
}