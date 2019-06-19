# Shuffle

A practice for random int array generator.
Input a single integer N. Output the integers 1..N in random order.

## Getting Started

### Prerequisites
#### 1. Install Node.js 
This program runs on the Node.js which version is upper than v11.14.0
#### Download the Node.js
* [Node.js](https://nodejs.org/en/) - Node.js Official Download Page.

#### 2. Install Dependancies
Switch folder into the root folder of the project.
(The root folder is where you can see a package.json file inside it.)

Run NPM install to install all the dependancies:
```
npm install
```

### Excuting Shuffle
You can excute the Shuffle either by NPM command or NODE command:

#### 1. Using NPM Command to Excute:
This command must be excuting in the project folder.

```
npm start
```

or
#### 2. Using NODE Command to Excute:
```
node index.js
```

### Usage

Excuting the Shuffle with either of the commands, you'll see an input notification shows up:

```
Please input an Integer (>0):
```

Input any Non-Zero Positive Integer (e.g. 10):
Then, you'll get a result shows similar with the result below.

```
Output:
[10,8,1,3,2,4,6,5,7,9]
```

## Test

Run NPM test for Unit Test:
```
npm test
```

The output of test result should look like this:
```
Shuffle
    Input as 0
      √ should be null
    Input as -1
      √ should be null
    Input as 1
      √ should be [1]
    Input as 10
      √ should be 10 of its length
      √ each number should be unique


  5 passing (23ms)
```

## Bugs

When you find issues, please report them:
* [Issues](https://github.com/SenjorWhite/shuffle/issues) - Shuffle Issues
