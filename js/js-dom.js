let mainTitle = document.getElementById("main-title");
console.log(mainTitle.innerText);

mainTitle.innerText = "<i> Hello using DOM! </i>";
mainTitle.innerHTML = "<i> Hello using DOM with styles! </i>";

let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].innerText = "Card " + (i + 1);
}

// let listItems = document.getElementsByName("li")

// for(let i = 0; i < listItems.length; i++) {
//    listItems[i].innerText = "item" + (i+1);
//    listItems[i].style.color = "red";
//    listItems[i].style.backgroundColor = "yellow";
//    listItems[i].style.listStyleType = "none";
//    listItems[i].style.margin = "10px";
// }

let title = document.getElementById('title');
let p = document.getElementById('desc');
let input = document.getElementById('name');
let image = document.getElementById('image');
let button = document.getElementById('btn');

console.log(input.value);
 input.value = "Hi Lambs!";

 title.style.color = "blue";
 title.style.fontFamily = "Arial";

 console.log(image.src);
 
 image.src = "https://i.pinimg.com/originals/b8/8e/24/b88e24d82e9aa245e7590df27b4a4e56.jpg"
 image.style.width = "300px";

 image.setAttribute('alt', 'Random image coming from internet')

 function clickMe() {
    console.log('a');
    alert("Button clicked!");
 }

 let count = 0;
 let displayCount = document.getElementById("count");

 document.getElementById("btn-plus").addEventListener("click", function(){
    count++;
    displayCount.innerText = count;
 });

 document.getElementById("btn-minus").addEventListener("click", function(){
    count--;
    displayCount.innerText = count;
 });

function addItem() {
  let input = document.getElementById('item-value');
  let value = input.value.trim(); 

  if (value !== "") {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById('item-list').appendChild(li);

    input.value = ""; 
  }
}
