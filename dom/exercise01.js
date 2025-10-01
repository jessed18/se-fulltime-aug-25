// A. console log the content of the list items in separate lines
console.log('---exercise A---');
let listItems = document.querySelectorAll('li');
for (let item of listItems) {
    console.log(item.innerHTML);
}

// B. console log the first word of the second paragraph
console.log('---exercise B---');
let paragraphs = document.querySelectorAll('p');
let secondParagraph = pargraphs[1];
let secondParagraphText = secondParagraph.innerHTML;
let firstWordofSecondParagraphText = secondParagraphText.split('')[0];
console.log(firstWordofSecondParagraphText);

// c. console log the number of paragraphs on the website
console.log('---exercise C---');
console.log(paragraphs.length);

