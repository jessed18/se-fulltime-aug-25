let intervalId = setInterval(() => console.log(new Date().getTime()), 50);
const data = await fetch('https://api.github.com/users/bitcoin/repos');
console.log(response);
clearIntervsl(intervalId);