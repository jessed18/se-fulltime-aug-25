async function getData() {
    const data = await fetch('https://api.github.com/users/bitcoin/repos');
    const response = await data.json();
    console.log(response);
    return response;
}

let data = getData();
console.log('outside',data);