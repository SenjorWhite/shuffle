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
(The root folder is where you can find a package.json file inside it.)

Run NPM install command to install all the dependancies:
```
> npm install
```

### Excuting Shuffle
You can excute the Shuffle by NODE command:

#### Using NODE Command to Excute:
```
> node shuffle
```

### Usage

Excuting the Shuffle with the command, you'll see an input notification shows up:

```
Please input an Integer (>0):
```

Input any Non-Zero Positive Integer (e.g. 10):
Then, you'll get a result shows similar with the result below.

```
Please input an Integer (>0):10
Output:
[5,9,3,7,4,10,6,2,1,8]
```

### Arguments

Here has some arguments for configuring the output format and input format.

* **-p** : Pure output, the result will be output without `Output:` prefix.
e.g.
```
> node shuffle 10 -p
[8,9,7,3,2,4,6,10,1,5]
```
* **-n** : no brackets, the result will be output without `[]` brackets.
e.g.
```
> node shuffle 10 -n
Output:
6,7,8,1,9,2,4,5,3,10
```

* **{number}** : Passing the number into the program directly.
e.g.
```
> node shuffle 10
Output:
[10,6,8,5,4,2,7,9,3,1]
```

#### You can also use multiple of them in one time with different order:
e.g.
```
> node shuffle -p 10 -n
5,2,6,8,3,10,4,7,1,9
```

## BUGS

When you find issues, please report them:
* [Issues](https://github.com/SenjorWhite/shuffle/issues) - Shuffle Issues
