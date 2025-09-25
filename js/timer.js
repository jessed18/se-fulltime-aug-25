// let query = document.querySelector

let display = document.getElementById('dispplay');

let second = 0;
let intervalId = null;

function formatTimer(second)
{
    let hours = Math.floor(s/3600);
    let minutes = Math.floor(s % 3600 / 60);
    let seconds = s % 60;

    return `${hours.toString()}: ${minutes.toString()}:${seconds.toString()}`;
}

document.getElementById('start').addEventListener
('click',() => {
    if(intervalId) return;
    intervalId = setInterval(() => {
        second++;
    },1000);
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    second = 0;
    updateDisplay();
});

// promise
function getData()
{
    return newPromise((resolve,reject) => {
        setTimeout(() => {
            if (success == true) {
                resolve({name: 'jesse', age: 21});
            }
            else
            { 
                reject('error occurred');
            }
        },2000);
    })
}

getData(true).then(console.log).catch(console.log);
getData(false).then(console.log).catch(console.log);