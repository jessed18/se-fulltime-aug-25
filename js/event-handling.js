// function clickA() {
//     alert9('button 1 clicked');
// }


// function clickB() {
//     document.getElementById('btn1').addEventListener('click', clickA);
//     document.getElementById('btn1').addEventListener('click', clickB);
// }

// document.getElementById('btn3').addEventListener('click', function(){
//     alert('callled via anonymous function');
// })

// document.getElementById('btnRemove').addEventListener('click',() => {
//     alert('event listeners removed');
//     document.getElementById('btn1').removeEventListener('click',clickA);
//     document.getElementById('btn2').removeEventListener('click',clickB);
// })

// let container = document.getElementById('container');

// container.addEventListener('click',(event)=>{
//     console.log('container clicked'+event.target + "event type:");
// })

// let innerDiv = document.getElementById('innerDiv');
// innerDiv.addEventListener('click',(event)=> {
//     console.log('inner div clicked'+event.target + "event type:");
//     event.stopPropagation();
// })

let input = document.getElementById('js');

input.addEventListener('input',(event) => {
    document.getElementById('preview').innerText = event.target.value;
})
