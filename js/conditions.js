/* let a = 5;
let c = 7;

let b = parseInt(prompt("Enter a number:"));

console.log(a+b);

if(a>10)
{
    console.log(a + " is greater than 10");
}
    else
{
    console.log(a + " is not greater than 10");
}
 */

let per = prompt("Enter your percentage: ");

if(per >= 70 && per < 80)
{
    console.log("B grade");
}
else if(per >= 80 && per < 90)
{
    console.log("A grade");
}

else if(per >= 90)
{
  console.log("A+ grade");
}

else{
  console.log("Fail");
}

let a = prompt("Enter number 1:");
let b = prompt("Enter number 2:");
let c  = prompt("Enter number 3:");

if(a > b)
{
    console.log(a);
    console.log(b);
}
else
{

}

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if(username == "admin")
{
    if(password == "admin123")
    {
       console.log("Login successful");
    }
    else
    {
        console.log("Wrong password! Login failed")
    }
}
else
{
    console.log("Login failed");
}