const shuffle = require("../src/shuffle");
const assert = require("assert");

describe("Shuffle", () => {
    describe("Input as 0", () => {
        let array = shuffle.generate(0);
        it("should be null", () => {
            assert.equal(array, null);
        });
    });

    describe("Input as -1", () => {
        let array = shuffle.generate(-1);
        it("should be null", () => {
            assert.equal(array, null);
        });
    });

    describe("Input as 1", () => {
        let array = shuffle.generate(1);
        it("should be [1]", () => {
            assert.deepEqual(array, [1]);
        });
    });

    describe("Input as 10", () => {
        let array = shuffle.generate(10);
        it("should be 10 of its length", () => {
            assert.equal(array.length, 10)
        });
        it("each number should be unique", () => {
            let isValid = verifyUnique(array);
            assert.equal(isValid, true);
        })

        function verifyUnique(array) {
            let isValid = true;
            let hashTable = {};
            for (let i = 0; i < array.length; i++) {
                if (hashTable[array[i]]) {
                    isValid = false;
                    break;
                } else {
                    hashTable[array[i]] = true;
                }
            }
            return isValid;
        }
    });
});