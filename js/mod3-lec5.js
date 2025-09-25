function logName(name) {
    let first = name.first;
    let last = name.last;
    console.log(`${first} ${last}`)
}

let name = {
    first: 'First',
    last: 'Last',
}
logName(name);

function logName(name) {
    let {first, last} = name;
    console.log(`${first} ${last}`) // object property shorhand notation
}

// another 
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

// let arr = [1,2,5];
console.log('expectation: 8. result: ', sum(1,2,5));


// now
let argumentValues = [1,2,3,4,5,6,7,8,9,10];
console.log('expectation: 55. result: ', sum(0,...argumentValues,0)); // you can even replace sum with sumRecursive

// rewrite
function sumRecursive(first, ...rest) {
    if (typeof first === 'undefined') return 0;
    return first + sumRecursive(...rest);
}

sumRecursive(1,2,5)
sumRecursive(1,...[2,5] )