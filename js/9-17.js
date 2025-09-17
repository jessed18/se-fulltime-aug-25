// while
let i = 0;
while(i<10)
{
  console.log("Hello" + i);
  i++;
}


// while
while(true)
{
    let number = parseInt(prompt("Enter a number:"));
    if(number == 0)
    {
        break;
    }
    else {
        console.log("You entered: " + number);
    }
}

//fgsdfg

let numbers = [10, -10, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, -100];

let min = numbers[0];

for(let i = 0; i < numbers.length; i++) {
    if (min > bumbers[i])
    {
        min = numbers[i];
    }
}
console.log("Minimum is: " + min);

// max

let numbers = [10, -10, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, -100];

let max = numbers[0];

for(let i = 0; i < numbers.length; i++) {
    if (max < numbers[i])
    {
        max = numbers[i];
    }
}
console.log("Maximum is: " + max);

// sum and avg
let numbers = [10, -10, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, -100];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Sum is: " + sum);
console.log("Average is: " + average);

// position
let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, -100];
let input = parseInt(prompt("Enter a number to search:"));
let position = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
        position = i; 
        break;        
    }
}

if (position !== -1) {
    console.log(input + " is in the list at position " + position);
} else {
    console.log(input + " is not in the list");
}


