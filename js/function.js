function greet()
{
    console.log("Hello world");
}

function addition(number1, number2){
    console.log(number1+number2);
}

addition(10,20);
addition(100,200);
addition(1,2);
// you can even add a third number


greet();
greet();
greet();

function sum(numbers){
    let sum: 0;
    for (let i = 0; i<numbers.length; i++);
{
    sum = sum + numbers[i];
}

return sum;
}

function avg(sum,count)
{
    return sum/count;
}

min([3,5,11,-3,5,89]);
min([30,50,10,40,5,89]);
min([300,500,100,400,50,890]);

let items = [30,50,10,40,5,89, 5, 4, 5];

function searchWithCount(numbers){
    let input = parseint(prompt("Enter a number to search: "));
    let count = 0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] == input) {
            count++;
        }
    }

    if (count > 0){
        console.log(input + "is in the list " + count + "time(s).");
    } else {
        console.log(input + "is not in the list.");
    }
}

searchWithCount(items);


let a = sum(items);
console.log("Sum is:" + a);

let b = avg(a,items.length);
console.log("Average is: + b");

// min
function min(numbers)
{
    let min = numbers[0];
    for(let i = 0; i< numbers.length; i++ )
    {
        if(min > numbers[i])
        {
            min = numbers[i];
        }
        
    }
    console.log("Minimum is: " + min);
}

// second min
function minAndSecondMin(numbers) {
    let min = numbers[0];
    let secondMin = numbers[1];

    if (secondMin < min) {
        [min, secondMin] = [secondMin, min];
    }

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] < min) {
            secondMin = min;
            min = numbers[i];
        } else if (numbers[i] < secondMin && numbers[i] !== min) {
            secondMin = numbers[i];
        }
    }

    console.log("Minimum:", min);
    console.log("Second minimum:", secondMin);
}

// simple function
function greet(){
    console.log("hello to js function");
}
greet();

// math operations
function addnumbers(a,b){
    let sum = a+b;
    console.log("the sum is" + sum);
}

addnumbers(5,10);
addnumbers(6,8);
addnumbers(7,8);

function multiplyNumbers(a,b){
    let product = a*b;
    console.log("the product is" + product);
}

 multiplyNumbers(2,2);

function divideNumbers(a,b){
    let quotient  = a / b;
    console.log("the quotient is" + quotient);
}

divideNumbers(12,4);

function subtractNumbers(a,b){
    let result  = a - b;
    console.log("the difference is" + result);
}

 subtractNumbers(16,6);

 // function with userInput

 function mul(){
    let num1 = parseInt(prompt("enter first number"));
    let num2 = parseInt(prompt("enter second number"));
    let result = num1 * num2;
    console.log("the result is: " + result);
 }

 mul();

 // another

 function div(){
    let num1 = parseInt(prompt("enter first number"));
    let num2 = parseInt(prompt("enter second number"));
    let result = num1 / num2;
    console.log("the result is: " + result);
 }

 div();

 // function that returns a value 

 function square(num) {
    return num*num;
 }

 let result = square(4);
 console.log("the square is: "+result);

 function runprogram() {
    let cars = ["BMW", "Tesla", "Prius"];
    let choice;

    while(true){
        choice = prompt("Enter a name to search for a car")
        if(choice.toLowerCase()=== "quit")
            console.log("exiting program... goodbye");
            break; // stop loop
    }

    if(cars.includes(choice.toLowerCase)){
        console.log(choice + "yes we have this car");
    }
    else {
        console.log(choice+ "we don't have this car");
    }
 }

 runprogram();