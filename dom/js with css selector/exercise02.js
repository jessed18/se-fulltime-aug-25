// console log the second and the fourth list item inside the second section only.
// A. you're allowd to use the class .js-second-section

let secondSection = document.querySelector('.js-second-section');
let items = secondSection.querySelectorAll('ul li');
console.log(items[1].textContent); // second item
console.log(items[3].textContent); // fourth item

// B. you're not allowed to use the class .js-second-section, but you're allowed to use the 
// class .js-section-titlespace

let title = document.querySelector('.js-second-section-title');
let section = title.closest('section');
let items2 = section.querySelectorAll('ul li');
console.log(items[1].textContent); // second item
console.log(items[3].textContent); // fourth item