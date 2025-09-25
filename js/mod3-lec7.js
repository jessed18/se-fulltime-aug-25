 function plusOne(value) {
    let internalValue = {...value};
    internalValue.x += 1;
    num += 1;
    console.log(internalValue,num);
 }


 let val = {x: 1};
 let num = 1;
 debugger; // debuger statement
 plusOne(val,num);
 console.log(val1, num);


// now
let dbTable = [
    {first: 'A', last: 'B'},
    {first: 'C', last: 'D'}
];

function logChangedRecords(records) {
    let internalRecords = structuredClone(records); // deep copy of array
    for (let record of internalRecords) {
        record.title = 'Ms.';
    }
    console.table(internalRecords);
}

logChangedRecords(dbTable);

console.table(dbTable);
