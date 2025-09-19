let person = {
  name: "Jesse",
  age: 21,
  isStudent: true,

  introduce: function() {
    console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
  },

  celebrateBirthday: function() {
    this.age++;
    console.log("Happy Birthday! I am now " + this.age + " years old.");
  }
};

console.log(person);        
console.log(person.name);  
console.log(person.age);    ; 


person.introduce();       
person.celebrateBirthday(); 


function countItems(arr) {
  let counts = {};

  // count
  for (let item of arr) {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  // display results
  for (let key in counts) {
    console.log(key + " appears " + counts[key] + " times");
  }
}

// collect input from prompt
let items = [];
while (true) {
  let input = prompt("Enter a letter (or 0 to stop):");
  if (input === "0") {
    break;
  }
  items.push(input);
}

// return
countItems(items);



// simple object
let student = {
    name: "jesse",
    age: "21",
    course: "software engineering"
};

console.log("Name:" +student.name);
conseole.log("Age:" +student.age);
console.log("course:" + student.course);


let shoe = {
    brand: "air forces",
    color: "white",
    year: "2020",

    start: function(){
        console.log("The shoe is worn.");
    }
};

console.log(shoe.brand);
console.log(shoe.color);
console.log(shoe.year);

shoe.start();

// object with nested object

let person = {
    name: "jesse",
    age: "21",
    course: {
        major: "software engineering",
        minor: "javascript"

    }
}

console

// create object with array property and use function also

let products = {
    name: "jesse's skincare",
    items: ["cleanser", "moisturizer", "toner"],
    add: function(product) {
        this.items.push(product);
    }
};

console.log(products.name);       
console.log(products.items);      

products.add("cleanser");           
console.log(products.items);      

// another example: creating an object with array 

let library = {
    name: "swag library",
    books: ["work hard play hard book", "evolution of success", "crazy life lessons"],
    showBooks: function(){
        console.log("Books available in" + this.name + ":");
        for (let i = 0; i < this.books.length; i++){
            console.log("-" + this.books[i]);
        }
    }
};

console.log(library.name);
library.showBooks();