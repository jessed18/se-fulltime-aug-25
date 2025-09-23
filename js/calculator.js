let display = document.getElementById('input');

let keys = document.querySelector('.keys');

keys.addEventListener('click', (event) => {
    let btn = event.target.closest('button');
    if (btn==null) return;

    let value = btn.dataset.val;
    if(value == undefined) return;
    console.log('value is' + value);

    if(display.value == '0') {
        display.value = value;
    }
    else
    {
      display.value += value;
    }
})

let equal = document.getElementById('equals');

document.getElementById('clear').addEventListener('click', () => {
    display.value = 0;
});

equal.addEventListener('click',() => {
    let result = eval(display.value);

    display.value = result;
})