 // If-Else Questions
// Write a program to check if a number is even or odd.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}
// Write a program to check if a person is eligible to vote (age ≥ 18)

let age = 17;

if (age >= 18){
    console.log("eligible to vote.");
}
else{
    console.log("not eligible to vote.");
}
// Write a program that takes a number and checks if it is positive, negative, or zero.

let num = 10;
if (num > 0){
    console.log("positive number");
} else if (num == 0) {
    console.log("zero");
} else {
    console.log("negative number");
}

if (num % 2 == 0){
    console.log(num + "is even");
} else {
    console.log(num + "is odd");
}

// Write a program to check if a number is divisible by 5 and 11.

let num1 = 35;
if (num1 % 5 == 0){
    console.log("divisible by 5");
} else if (num1 % 11 == 0) {
    console.log("divisible by 11");
} else {
    console.log("not divisible by 5 nor 11");
}


// For Loop Questions
// Write a program to print numbers from 1 to 10 using a for loop.

for (let num = 1; num <= 10; num++){
    console.log(num);
}
// Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 12; i++) {
  console.log("5 x" + i + "=" + (5*i));
}

// If-Else + For Loop Practice Questions

// 1. Write a program that prints numbers from 1 to 20. For each number, check if it is even or odd and print the result.
(Example: 2 → Even, 3 → Odd)

for (let num = 1; num <= 20; num++) {
   if (num % 2 == 0) {
    console.log(num + "is even");
   } else {
     console.log(num + "is odd");
   }
}
// 2. Write a program to print the multiplication table of 7 but also check:
// - If the result is greater than 50, print "Big number".
// Otherwise, print the result only.

for (let i = 1; i <= 12; i++){
    console.log(" 7 x" + i + "=" (7*i));
}
    if (i > 50){
        console.log("big number");
    } 
    else{
       console.log(num);
    }


// 3. Write a program to print numbers from 1 to 50.


//-If a number is divisible by 3, print "Fizz".

// -If divisible by 5, print "Buzz".

//-If divisible by both 3 and 5, print "FizzBuzz".

//-Otherwise, print the number itself.

for (let i = 1; i <= 12; i++){
    console.log(i);
}
    if(i % 3 == 0){
        console.log("fizz");
    } else if (i % 5 == 0){
        console.log("buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else {
        console.log(i);
    }



// . Write a program to calculate the sum of only even numbers between 1 to 100.

let sum = 0;
for (let i = 2; i <= 100; i +=2) {
    sum += i;
}

console.log("the sum of even numbers between 1 and 100 is" + sum);

5. Write a program that checks the prime numbers between 1 to 50 using a loop and if-else conditions.

for (let num = 2; num <= 50; num++){
    let isPrime = true;


    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        console.log(num + "is a prime number");
    } else {
        console.log(num + "is not a prime number");
    }
}

