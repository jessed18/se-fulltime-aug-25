// Find the element that occurs the most often in the array

function valueToKey(value) {
    if (typeof value === 'string') {
        return 's_' + value;
    }
    if (typeof value === 'number') {
        return 'n_' + value;
    }
    if (typeof value === 'boolean') {
        return 'b_' + value;
    }
}

function keyToValue(key) {
    if (key[0] === 's') {
        return key.split('s_')[1];
    }
    if (key[0] === 'n') {
        return Number(key.split('n_')[1]);
    }
    if (key[0] === 'b') {
        return key.split('b_')[1] === 'true';
    }
}

function buildDictionary(arr) {
    let d = {};

    for (let elem of arr) {
        let key = valueToKey(elem);
        if (key in d) {
            d[key] += 1;
        } else { 
            d[key] = 1;
        }
    }

    return d;
}

function countElementInArr(arr, target) {
    let result = 0;

    for (let elem of arr) {
        if (elem === target) {
            result += 1;
        }
    }
    return result;
}

function solution(arr) {
    let result = null;
    let maxCount = 0;

    let d = buildDictionary(arr); 
    
    for (let key in d) {
        if (d[key] > maxCount) {  
            result = keyToValue(key);
            maxCount = d[key];
        }
    }

    return result;
}

console.log(solution([1, 2, 3, 2, 2, 4]));  
console.log(solution(['a', 'b', 'a', 'c', 'a']));  
console.log(solution([true, false, true, true]));  
console.log(solution([5, 5, 5, 10, 10]));  