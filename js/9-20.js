// promise success/failure
// write a program that creates a promise which:
// - resolves with "data fetched successfully" if a random number is greater than 0.5
// - rejects with "failed to fetch data!" otherwise.
// print the result using .then() and .catch()

let promise = new Promise(function(resolve, reject) {
    let num = Math.random();
    if (num > 0.5) {
        resolve("data fetched successfully");
    } else {
        reject("failed to fetch data!");
    }
});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


// promise with setTimeout
// write a program that uses a promise to simulate a 3-second delay.
// - after 3 seconds, it should resolve with "task completed"
// print the message to the console

let delayPromise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("task completed");
    }, 3000);
});

delayPromise.then(function(message) {
    console.log(message);   
});

// chained promises
// write a program that chains promises:
// 1. first promise resolves with "step 1 done"
// 2. then another .then() should log "step 2 done"
// 3. finally log "all steps completed"

let chainedPromise = new Promise(function(resolve) {
    resolve("step 1 done");
});

chainedPromise
    .then(function(msg) {
        console.log(msg);
        return "step 2 done";
    })
    .then(function(msg) {
        console.log(msg);
        return "all steps completed";
    })
    .then(function(msg) {
        console.log(msg);
    });