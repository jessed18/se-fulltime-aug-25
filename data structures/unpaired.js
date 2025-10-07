// suppose a javascript array of numbers is given.
// return the element that cannot have a pair.

// you can assume that there is always exactly one result.
// the numbers are between 1 and 1000000

function buildSet(arr) {
    let set = newSet();
    for (let elem of arr) {
        if (set.has(elem)) {
            set.delete(elem);
        } else {
            set.add(elem);
        }
    }
    return set;
}

function unpaired(arr) {
    let d = buildSet(arr);
    return [...s][0];
}