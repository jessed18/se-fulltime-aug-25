let val = 1;
let o = {val: 1}

function plusOne(val,o) {
    val += 1;
    internalO.val += 1;
    console.log('inside',val,internalO);
};

plusOne(val,o);
console.log('outside',val,o);

