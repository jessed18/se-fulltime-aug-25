// 1. write a js program to check whether a number entered by the user is even or odd

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
};

// 2. write a program to find the sum, difference, multiplication, and division of two numbers entered

let num1 = Number(prompt("enter the first number:"));
let num2 = Number(prompt("enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("sum: " + sum);
console.log("difference: " + difference);
console.log("product:" + product);
console.log("quotient" + quotient);

// 3. write a program using a for loop to print numbers from 1 to 20.

for (let num = 1; num <= 20; num++){
    console.log(num);
};

// 4. write a program that prints
// "fizzbuzz" if a number is divisible by both 3 and 5,
// "fizz" if divisible by 3 only,
// "buzz" if divisible by 5 only,
// else print the number (from 1 to 30)

for (let i = 1; i <= 30; i++){
    console.log(i);
}

    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    };
    
// 5. write a program using 'switch case' to print the day of the week based on a number (1 = monday, 7 = sunday)

let dayNum = Number(prompt("enter a number (1-7): "));

switch (dayNum) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("error. enter a number between 1 and 7.");
};

// 6. create a function that takes a number as input and returns its square

function square(num) {
    return num * num;
};

// 7. create an array of 5 fruits. write a function that checks if a fruit entered by the user exists in the list or not.

let myFruits = ['apple','banana','mango', 'pear', 'watermelon'];

let userFruit = prompt("enter the name of a fruit");

if (myFruits.includes(userFruit)) {
    console.log(userFruit + "exists in the list");
} else {
    console.log(userFruit + "does not exist in the list");
};

// 8. create an object student with properites: name, age, grade and a method showInfo() that prints the student's details

let student = {
    name: "jesse",
    age: 21,
    grade: "senior",

    showInfo: function() {
        console.log("name:" + this.name);
        console.log("age:" + this.age);
        console.log("grade:" + this.grade);
    }
};

student.showInfo();

// 9. create a library object with a name and an array of books. write a method to display all available books.

let library = {
    name: "swag library",
    books: ["work hard play hard book", "evolution of success", "crazy life lessons"],
    showBooks: function(){
        console.log("Books available in" + this.name + ":");
        for (let i = 0; i < this.books.length; i++){
            console.log("-" + this.books[i]);
        }
    }
};

console.log(library.name);
library.showBooks();

// 10. write a program that
// - takes an array of student objects (each with name, marks)
// - calculates grades based on marks:
    // >= 90 (A)
    // >= 75 (B)
    // >= 50 (C)
    // < 50 (Fail)
// - prints the student's names, marks and grade

let students = [
    {name: "jesse", marks: 95},
    {name: "kate", marks: 75},
    {name: "joe", marks: 43},
];

function calculateGrade(marks){
    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 75) {
        console.log("B");
    } else if (marks >= 50) {
        console.log("C");
    } else {
        return "fail";
    }
};

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade = calculateGrade(student.marks);
    console.log(student.name + " | marks : ' + student.marks + | grade: " + grade);
};

// 11. write a program that simulates an ATM with options:
// - 1. check balance
// - 2. deposit money
// - 3. withdraw money
// - 4. quit
// requirements:
// start with balance = 1000 
// use a while loop to keep asking for options until the user quits
// use if/else and switch for logic
// update balance after deposit/withdraw


let balance = 1000;
let choice;

while (choice !== "4") {
    choice = prompt(
        "ATM options:\n1. check balance\n2. deposit\n3. withdraw\n4.quit"
);

    switch (choice) {
        case "1":
            console.log("balance =" + balance);
            break;
        
        case "2":
            let deposit = Number(prompt("enter deposit:"));
            if (deposit > 0) balance += deposit;
            console.log("balance = " + balance);
            break;

        case "3":
            let withdraw  = Number(prompt("withdraw amount:"));
            if (withdraw > 0 && withdraw <= balance) balance -= withdraw;
            console.log("balance = " + balance);
            break;

        case "4":
            console.log("quit");
            break;

        default: 
            console.log("error");
    } 
};

