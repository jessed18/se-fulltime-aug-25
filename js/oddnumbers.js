
// print even odd numbers uing if else

// check if a number is positive or negative

let num = 5;

if(num > 0){
    console.log("the number is positive.")
}
else{
    console.log("the number is negative.")
}

// check voting eligibility

let age = 16;
if(age >= 18){
    console.log("you are eligible to vote.")
}
else{
    console.log("you are not eligible to vote.")
}

// print even odd numbers using if else 

let number = 7;

if (number % 2 == 0){
    console.log("even number")
}
else{
    console.log("odd number")
}

// check password length

let pass = "12435";

if (password.length >= 6){
    console.log("Password is strong")
}
else{
    console.log("Password is too short")
}

// grade check

let grade = 90;

if (grade >= 90 && grade <= 92.5){
    console.log("A-");
}
else if (grade < 90 && grade >= 86.5){
    console.log("B+");
} else {
    console.log("grade is not in this range.");
}

// print even and odd number

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}

// find number greater than 50

let numb = [10, 55, 32, 80, 95]

for (let i = 0;  i < numb.length; i++){
    if (numb[i]>50){
        console.log(numb[i] + "is greater than 50")
    }
    else{
        console.log(numb[i] + "is not greater than 50")
    }
}

// print pass or fail

let marks = [35, 60, 80];

for (let i = 0; i < marks.length; i++){
    if (marks[i] >=50){
        console.log("student" +(i+1)+ "is: pass");
    }
    else{
        console.log("student" +(i+1)+ "is: fail");
    }
}