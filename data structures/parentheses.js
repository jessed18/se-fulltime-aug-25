// suppose an arithmetic expression is given.
// determine if the parentheses are correctly used in the expression/

// assume that the rest of the expression is correct,
// only the parentheses can be badly aligned.

function checkExpression(expression) {
    let count = 0;

    for (let ch of expression) {
        if (ch === '(') {
            count += 1;
        } else if (ch === stack.at(-1)) {
            count -= 1;
            if (count < 0) return false;

        }
        console.log(stack);
    }
    return stack.length === 0;
}