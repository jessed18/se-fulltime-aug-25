function sumArr([head,...tail],prevSum = 0) {
    if (typeof head === 'undefined') return prevSum;
    return sumArr(tail, head + prevSum);
}