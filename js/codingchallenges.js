// module 1
// datatypes and variables

// 1. Enumerate all datatypes you have learned.
// Create a variable for each datatype and console log the results.
// For bonus: use template literals in a multiline string to print them all together.

let sum = (a, b) => a + b;

let dict = {
  apple: 'apfel',
  egg: 'ei',
};

let list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let mySet = new Set(list);
let myMap = new Map(Object.entries(dict));
let theMap = new Map([
  ['apple', 'apfel'],
  ['egg', 'ei'],
]);

// primitive datatypes
let num = 5;
let str = 'abc';
let bool = false;
let undef; // default undefined
let nullValue = null;
let bigNum = 5n;
let mySymbol = Symbol('test');

// printing all with template 
console.log(`
Primitive Datatypes:
  num = ${num} → ${typeof num}
  str = ${str} → ${typeof str}
  bool = ${bool} → ${typeof bool}
  undef = ${undef} → ${typeof undef}
  nullValue = ${nullValue} → ${typeof nullValue}
  bigNum = ${bigNum} → ${typeof bigNum}
  mySymbol = ${mySymbol.toString()} → ${typeof mySymbol}

Reference Datatypes:
  sum = ${sum} → ${typeof sum}
  dict = ${dict} → ${typeof dict} (is Array? ${Array.isArray(dict)})
  list = ${list} → ${typeof list} (is Array? ${Array.isArray(list)})
  mySet = ${mySet} → ${typeof mySet}
  myMap = ${myMap} → ${typeof myMap}
  theMap = ${theMap} → ${typeof theMap}
`);


// 2. describe a hotel booking as an object. make sure you include the room
// the name of the person or people staying in the room, the start date, the
// end date, and the total price. research how it is optimal to represent dates

let booking = {
  roomNumber: 218,
  guest: 'Jesse',
  startDate: {
     year: 2022,
     month: 11,
     day: 25
  },
  endDate: {
    year: 2022,
    month: 11,
    day: 28
  },
  priceUSCents: 108875,
};

// '2025.10.9' - this is another way to write the date


// 3. create a list with the days of the week.

let list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// you can also format it like

let list = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

console.log(list, String(list));


// 4. create a map data structure with the values of the cards 2, 3, 4, 5, 6, 7
// 8, 9, 10, jack, queen, king, ace according to the rules of blackjack
// assume an ace is worth 11 points.

let cards = new Map([
    [2,2],
    [3,3],
    [4,4],
    [5,5],
    [6,6],
    [7,7],
    [8,8],
    [9,9],
    [10,10],
    ['Jack','10'],
    ['Queen', 10],
    ['King', 10],
    ['Ace,11']
]);

// ask the user to enter a name.
// if the name is empty, print: empty
// if the name is 1-8 characters long, print "short name"
// otherwise, print "long name"

let firstName = prompt('Enter a name');

if (firstName.length === 0) {
   console.log('empty');
} else if (firstName.length < 8) {
    console.log('short name');
} else {
    console.log('long name');
}


// module 2
// if else exercise

// ask the user to enter a name
// if the name is empty. print: empty
// if the name is 1-8 characters long, print "short name"
// otherwise, print "long name"

let firstName = prompt('Enter a name');

if (firstName === null && firstName.length === 0) {
    console.log('empty');
} else if (firstName.length <= 8) {
    console.log('short name');
} else {
    console.log('long name');
};

// logical operators exercise
// AND 
console.log('logical operator');
console.log('false && false -->', false && false);
console.log('false && true -->', false && true);
console.log('true && false -->', true && false);
console.log('true && true -->', true && true);

// OR
console.log('logical operator');
console.log('false || false -->', false || false);
console.log('false || true -->', false || true);
console.log('true || false -->', true || false);
console.log('true || true -->', true || true);

// negation
console.log('negation');
console.log('!true -->', !true);
console.log('false -->', !false);
console.log('!!true -->', !!true);

// exclusive or operation
console.log('exclusiive or operation');
let a = true;
let b = false;
let xor = (a,b) => (!a && b) || (a && !b);
let axorb = (!a && b) || (a && !b);
console.log('a XOR b', axorb);
// feel free to switch true and false around

// switch statement exercise
let secretIndex = Math.floor(Math.random()*5);

switch (secretValue) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
   default:
        console.log('four');
};

// or you can also use a dictionary
let dict = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
}
console.log(dict[secretValue]);

// iteration - while loop 
let i = 0;
while (i < list.length) {
    console.log(list[i]);
    i = i + 1;
};

// iteration - for loop 
// for (initialization; condition; increment) {body_statements;}

for (let i = 0; i < list.length; i = i++) {
    console.log(list[i]);
};

// for in loop
for (let i in list) {
    console.log(list[i]);
};

// for of loop
for (let day of list) {
    console.log(day);
};

// do while loop
let userInput = null;
do {
   userInpur = prompt('Enter a value');
} while (!(userInput !== null && userInput.length > 0));
console.log(userInout + 'is valid');

// coding challenge #1
// console log all numbers (from 0 to 9) inclusive.
for (let i = 0; i < 10; i++) {
    console.log(i);
};

// from 1 to 10 (inclusive)
for (let i = 1; i <= 10; i++) {
    console.log(i);
};

// from 9 to 0 (inclusive)
for (let i = 9; i >= 0; i--) {
    console.log(i);
};

// from 10 to 1 (inclusive)
for (let i = 10; i >= 1; i--) {
    console.log(i);
};

// that are even between 1 and 25. instead of the odd numbers, write "odd"
for (let i = 1; i <= 25; i++) {
    if (i % 2 === 1) {
        console.log('odd');
    } else {
        console.log(i);
    }
};

// coding challenge #2
// ask the user to enter an integer between 1 and 100. validate your input and
// repeat asking the user for this input until the user succeeds

do {
   let value = prompt('Enter a number between 1 and 100');
   let intValue = Number.parseInt(value);
} while (
    !Number.isNaN(intValue) && 
    typeof intValue == 'number' &&
    intValue >= 1 && intValue <= 100
);

console.log('the input is valid', intValue);

// coding challenge #3
// create an algorithm that guesses the 
// number entered by the user optimally such that we always exclude at least
// half of the available numbers in the domain 1 to 100
// in each step, console log the guess and console log whether the number to be
// guessed is lower, higher, or equal to the guess

// example: suppose the user entered 35. the computer's guesses:
// 50 lower (remaining interval: 1 to 49)
// 25 higher (remaining interval: 26 to 49)
// 38 lower (remaining intervaL: 26 to 38)
// 31 higher (remaining interval: 32 to 38)
// 35 match

let minValue = 1;
let maxValue = 100;

let intValue = 35;

while (minValue <= maxValue) {
    let midpoint = Math.floor((minValue + maxValue) / 2);

    if (intValue === midpoint) {
        console.log(midpoint, "match");
        break; 
    } else if (intValue < midpoint) {
        console.log(midpoint, "lower");
        maxValue = midpoint - 1; 
    } else {
        console.log(midpoint, "higher");
        minValue = midpoint + 1;
    }
}

// coding challenge #4
// think of a number between 1 ans 100, but don't tell this to the computer
// once the computer guesses a number based on the rules seen in exercise 3,
// tell the computer if your number is greater than, less than, or equal to the
// guess of teh computer. the computer continues guessing until it guesses your
// number correctly
let minValue = 1;
let maxValue = 100;
let response = "";

while (response !== "equal") {
    let midpoint = Math.floor((minValue + maxValue) / 2);
    response = prompt(`is your number ${midpoint}? (type 'higher', 'lower', or 'equal')`);

    if (response === "equal") {
        console.log(`congrats! the number is ${midpoint}`);
    } else if (response === "lower") {
        maxValue = midpoint - 1;
    } else if (response === "higher") {
        minValue = midpoint + 1;
    } else {
        console.log("type 'higher', 'lower', or 'equal'");
    }
}

// quadratic equation exercise
function getCoefficient(name) {
    let value;
    do {
        value = Number(prompt(`Enter coefficient ${name}:`));
    } while (isNaN(value));
    return value;
}

function getCoefficients() {
    let a = getCoefficient('a');
    let b = getCoefficient('b');
    let c = getCoefficient('c');
    return [a, b, c];
}

function getDiscriminant(a, b, c) {
    return b * b - 4 * a * c;
}

function printQuadraticSolutions(a, b, c) {
    let discriminant = getDiscriminant(a, b, c);
    let sqrtDisc = Math.sqrt(discriminant);
    let solution1 = (-b + sqrtDisc) / (2 * a);
    let solution2 = (-b - sqrtDisc) / (2 * a);
    console.log(`This equation has two solutions: ${solution1} and ${solution2}`);
}

function printSingleSolution(a, b) {
    let solution = -b / (2 * a);
    console.log(`This equation has one solution: ${solution}`);
}

function printComplexSolutions() {
    console.log('This equation has complex solutions.');
}

function quadraticEquation() {
    let [a, b, c] = getCoefficients();
    let discriminant = getDiscriminant(a, b, c);
    if (discriminant > 0) {
        printQuadraticSolutions(a, b, c);
    } else if (discriminant === 0) {
        printSingleSolution(a, b);
    } else {
        printComplexSolutions();
    }
}

// factorial exercise
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}

function countToTen(val) {
    if (val >= 10) return;
    console.log(val);
    countToTen(val + 1);
}


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n-1);
}
let factArrow = n => n === 0 ? 1: n * factorial(n-1);

console.log('factorial(5)', facotiral(5));
console.log('factArrow(5)', factorial(5));
console.log('5*4*3*2', 5*4*3*2);

// descructuring and sprad operator
let [first, {a: secondAValue}] = [{a:1}, {a:2}, {a:5}];

let a = 2;
let b = 1;

console.log(a,b);
[a,b] = [b,a];
// [a,b] = [1,2];
// a = 1; AND b = 2; in parallel
console.log(a,b);

// let first = {a : 1};
// let secondValue = 2


// cloning exercise
let dbTable = [
    {first: 'A', last: 'B'},
    {first: 'C', last: 'D'}
]

function logChangedRecords(records) {
    // let internalRecords = [...records]; // shallow copy 
    let internalRecords = sturcuturedClone(records); // deep copy
    for (let record of internalRecords) {
        record.title = 'Ms.';
    }
    console.table(internalRecords);
}

logChangedRecords(dbTable);

console.table(dbTable);

// 1. create a function that calculates the nth fibonacci number based on the definition.
// fib(0) is 0.
// fib(1) is 1.
// fib(n) is fib(n-1) + fib(n-2) for n>=2.

function fib(n) {
    if (n ==0) return 0;
    if (n==1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib((7)));


// 2. create a function that accepts an array and incremenrs eacj value in the array by 1.
// you can assume the input only contains numbers.
// then print the return value of the array and the original array to the console.
// make sure the original array stays intact.

let arr = [1,2,5];

function incrementValues(list) {
   list = [...list]; // shallow copy - outside world stays intact.
   for (let i in list) {
         list[i] += 1;
   }
   console.log('inside',list);
}

incrementValues(arr);
console.log('outside',arr);


// 3. create a function that generates an HTML unorderd list from an array and
// returns the generated unordered list HTML markup as a string.

let days = ['Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'];

function UlMarkup(list) {
    let html ='<ul';
    for (let item of list){
        html += `<li${item}</li>`;
    }
    html += '</ul>';
    return html;
}

console.log(toUlMarkup(days));

// that was demo, here is the actual challenge
let container = document.querySelector('.js-container');
container.innerHTML = toUlMarkup(days);

// 4. create a function that generates an HTML table from a 3x3 array and 
// returns the generated table HTML markup as a string.
function toTableMarkup(arr) {
    let html = '<table border="1">';
    for (let row of arr) {
        html += '<tr>';
        for (let cell of row) {
            html += `<td>${cell}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}

