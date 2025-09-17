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

let items = [30,50,10,40,5,89];

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
