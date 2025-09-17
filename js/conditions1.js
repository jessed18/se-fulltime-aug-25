let a = Number(prompt("Enter number 1:"));
let b = Number(prompt("Enter number 2:"));
let c = Number(prompt("Enter number 3:"));

if (a > b && a > c) {
    console.log("a is the greatest:", a);

    if (b > c) {
        console.log("b is greater than c:", b, ">", c);
    } else {
        console.log("c is greater than or equal to b:", c, ">=", b);
    }

} else if (b > a && b > c) {
    console.log("b is the greatest:", b);

    if (a > c) {
        console.log("a is greater than c:", a, ">", c);
    } else {
        console.log("c is greater than or equal to a:", c, ">=", a);
    }

} else {
    console.log("c is the greatest:", c);

    if (a > b) {
        console.log("a is greater than b:", a, ">", b);
    } else {
        console.log("b is greater than or equal to a:", b, ">=", a);
    }
}

console.log("You entered:", "a =", a, ", b =", b, ", c =", c);
