// write an async function to retrieve a repository
// 'https://api.github.com/users/bitcoin/repos'
// console log the result on top level

async function getRepos() {
    let repos = await fetch('https://api.github.com/users/bitcoin/repos');
    let data = await repos.json();
    return data; // async functions wrap their return values in a promise
}

let promise = getRepos();
let repos = await promise; // top level usage of await to unwrap a promise.
console.log(repos);

