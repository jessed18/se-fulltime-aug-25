 // value and reference types
 function plusOne(value) {
    value += 1;
    console.log(value);
 }

 let val = 1;
 plusOne(val);
 console.log(val);

 // another
function plusOne(value,num) {
    value.x += 1;
    console.log(value,num);
 }

 let val1 = {x: 1};
 let num = 1;
 plusOne(val1);
 console.log(val1, num);
