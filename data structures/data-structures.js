// data structures

// list / arrays

let bookTitles = ["The River","The ultimate side of world"];

// dictionary

let person = {
    'name': 'Masood',
    'age': '30',
    'role': 'trainer',
    'role': 'Developer'
}

console.log(person.name);

console.log(person['role']);

// stacks = lifo and queues = fifo
webPages.push('Page A');
webPages.push('Page B');
webPages.push('Page C');

console.log(webPages.pop());
console.log(webPages);
webPages.pop();

console.log(webPages);
console.log(listofOrders.shift()); 

console.log(listofOrders);


// exercise
function a(count) 
{
    console.log('A' + count);

    if(count == 10)
    {
        return -1;
    }
    count++;
    return a(count);
}

a(1);



function factorial(count) 
{
    console.log('Calculating factorial for: ' + count);

    if(count == 1 || count == 0)
    {
        return 1;
    }
    
    return count * factorial(count - 1);
}
