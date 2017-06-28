![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# PP | ES6 Algorithms

## Introduction

We've taken a look at some of the basic and more advanced features of ES6 in JavaScript. One of the biggest challenges you're going to face going forward is using these new features in the appropriate places.

The easiest way to begin recognizing these patterns is refactoring code that is written in ES5 into ES6.

In this pair-programming challenge, you're going to have snippets of ES5 code. What you will do is refactor this code into the new ES6 standard.


## Refactoring Process

Refactoring is hard. It's difficult to fix or update code without accidentally modifying how it works, or breaking some other piece of code that depends on it.

So, what we've done is set up a `test suite` in [mocha](https://mochajs.org/) to make sure you don't break anything.

<img src="https://i.imgur.com/jVN0xBn.png" width="300px">

<!-- :::info -->
**Mocha** is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
<!-- ::: -->

To get started with Mocha, we must first install it:

```
$ npm install mocha  --global
```

Then, clone our starter code:

```
$ git clone https://github.com/ironhack-labs/lab-es6-algorithms
$ cd lab-es6-algorithms/starter-code/
```

Then, install the local packages our project requires:

```
$ npm install
```

Once the setup is done, we can run our tests by simply entering the mocha command:

```
$ mocha

  ArrayFunctions
    printSpecial()
      ✓ should return each element with " --- " in between
    doubleArray()
      ✓ should double the value of all numbers in an array
    superPower()
      ✓ should return each element to the power of it's index

  bubbleSort()
    ✓ should an array of numbers sorted from least to greatest

  mergeSort()
    ✓ should an array of numbers sorted from least to greatest

  LetterSequence
    createSequence()
      ✓ should return the sequence with the count of repetitions in between each character
      ✓ should only have a numbered sequence for repeats greater than 1
    decodeSequence()
      ✓ should return a sequence with repetition count in letters


  8 passing (11ms)
```

The checks mean that all tests are passing.

:cat: If you want to get a fancy output for your tests, try:

```
$ mocha --reporter nyan
```

![](https://i.imgur.com/OReSi2C.png)

### Rules

Do ***not***:

- change class or function names.
- modify the line that says `module.exports`
- modify or change any of the tests

***Do***:

- Run the tests after you modify code. This will tell you what's broken. This can be done by simply running the `mocha` command.

## 1. Bubble Sort: `bubble-sort.js`

[Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) is the simplest and slowest sorting algorithm. It simply iterates over the array, and compares each item 2 elements at a time. If the item on the right is less than the item on the left, they will be swapped.

The array will be iterated over until all items are in order.

![](https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)

<!-- :::warning -->
### ES6 Concepts **You Must Use**

- `let`
- `const`
<!-- ::: -->

## 2. Merge Sort: `merge-sort.js`

[Merge sort](https://en.wikipedia.org/wiki/Merge_sort) is a more complicated, but often times quicker sorting algorithm.

Merge sort breaks down the array into smaller chunks of 2 to start.

The left and right elements of these pairs of two are compared, and then *merged* together in sorted order. This continues until we have one final merged array.

![](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

<!-- :::warning -->
### ES6 Concepts **You Must Use**

- `const` / `let`
- `spread operator`
<!-- ::: -->

## 3. Array Functions: `array-functions.js`

In this file, you will find 3 array functions.

### 3.1 `printSpecial`

This function takes an input of an array, and turns it into a string seperated with ` --- `.

**Example**

```javascript
const arrayFunctionsObject = new ArrayFunctions();
arrayFunctionsObject.printSpecial([12, 33, 144, 122])
// => 12 --- 33 --- 144 --- 122
```

### 3.2 `doubleArray`

This function takes an input of an array of numbers, and returns an array with each number doubled *(times two)*

**Example**

```javascript
arrayFunctionsObject.doubleMyArray([10, 20, 35, 12])
// => [20, 40, 70, 24]
```

### 3.3 `superPower`

`superPower` takes an array of numbers, and returns a number. This number is created from taking each element multiplied by 10 to the power of it's index position in the array, and then adding each elements together.

**Example**

```javascript
arrayFunctionsObject.superPower([1,2,3,4,5])
// (1 x 10^0) + (2 x 10^1) + (3 x 10^2) + (4 x 10^3) + (5 x 10^4)
// (1)        + (20)       + (300)      + (4000)     + (50000)
// => 54321
```

<!-- :::warning -->
### ES6 Concepts **You Must Use**

- [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [`static methods`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [`arrow functions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- `const / let`
<!-- ::: -->


## (INDIVIDUAL BONUS) 4. Letter Sequencer: `sequencer.js`

**Review the _ES6 Advanced Features_ self-study before you begin.**
(You will need _spread operator_ and _array destructuring_ for this step.)

`LetterSequencer` is an object with two methods.

The first function `createSequence` takes a series of letters, and returns a string with a representation of how many times a particular character occurred in order.

**Example**

```javascript
const sequence = new LetterSequence();
sequence.createSequence("aabbccabbca");
// => 2a2b2ca2bca

sequence.createSequence("aabbcc");
// => "2a2b2c"

sequence.createSequence("aabbbcc");
// => "2a3b2c"
```

`decodeSequence` will do the opposite, taking a sequence of letters and numbers from `createSequence`, giving back a sequence of repeated characters.


**Example**

```javascript
sequence.decodeSequence("2a2b2ca2bca");
// => aabbccabbca

sequence.decodeSequence("2a2b2c");
// => aabbcc

sequence.decodeSequence("2a3b2c");
// => aabbbcc
```


<!-- :::warning -->
### ES6 Concepts **You Must Use**

- [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [`static methods`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- `spread operator`
- `const / let`
- `array destructuring`
<!-- ::: -->


Happy Coding!
