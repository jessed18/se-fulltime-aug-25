function resolvedPromiseCallback( resolve, reject ) {
    // call resolve( value ) to resolve a promise
    resolve('value');
}

let resolvePromise = new Promise(resolvedPromiseCallback);

// call reject( reason ) to reject a promise
let rejectedPromise = new Promise( ( resolve, reject) => reject('error'));

// create a resolved promise
let immediatelyResolvedPromise = Promise.resolve('immediately resolved value');

resolvedPromise.then(console.log);

rejectedPromise
    .then(console.log)
    .catch(console.warn);

immediatelyResolvedPromise.then(console.log);

