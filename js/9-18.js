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