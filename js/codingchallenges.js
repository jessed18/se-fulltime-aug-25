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