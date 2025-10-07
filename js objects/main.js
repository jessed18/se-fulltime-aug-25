
class Person {
  // constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  greet() {
    console.log(`hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}

// create an object from class
let person1 = new Person("Usman", 24);
person1.greet(); // output

console.log('\n');
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  start() {
    console.log(`${this.model} ${this.color} is starting`);
  }
}

let car1 = new Car("Honda civic", "white");
let car2 = new Car("ferrari", "black");

car1.start();
car2.start();

console.log('\n');

class Top {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  start() {
    console.log(`${this.type} ${this.color} is being worn`);
  }
}

let top1 = new Top("tank top", "pink");
let top2 = new Top("sweater", "brown");

top1.start();
top2.start();

console.log('\n');

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance; /
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`${this.owner} withdrew $${amount}. Remaining balance: $${this.balance}`);
    }
  }
}

let account1 = new BankAccount("jesse", 1000);
account1.deposit(500);
account1.withdraw(300);

console.log('\n');

// student class
class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Roll No: ${this.rollNo}`);
    console.log(`Marks: ${this.marks}`);
    console.log('---');
  }
}

const student1 = new Student('Alice Johnson', 101, 95);
const student2 = new Student('Bob Smith', 102, 88);

console.log('STUDENT INFORMATION:');
student1.displayInfo();
student2.displayInfo();

console.log('\n');

// car class
class CarWithAge {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} (${this.year}) is starting...`);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    console.log(`This car is ${age} years old.`);
    return age;
  }
}

const myCar = new CarWithAge('Honda', 'Pilot', 2004);

console.log('CAR INFORMATION:');
myCar.start();
myCar.getAge();

// atm
class ATM {
  constructor(pin, balance) {
    this.pin = pin;
    this.balance = balance;
  }

  start() {
    if (prompt("Enter PIN:") !== this.pin) {
      alert("Wrong PIN!");
      return;
    }

    while (true) {
      let choice = prompt("1.Balance 2.Deposit 3.Withdraw 4.Exit");
      
      if (choice === "1") {
        alert(`Balance: $${this.balance}`);
      } else if (choice === "2") {
        let amount = parseFloat(prompt("Deposit amount:"));
        this.balance += amount;
        alert(`New balance: $${this.balance}`);
      } else if (choice === "3") {
        let amount = parseFloat(prompt("Withdraw amount:"));
        if (amount > this.balance) {
          alert("Insufficient funds!");
        } else {
          this.balance -= amount;
          alert(`New balance: $${this.balance}`);
        }
      } else if (choice === "4") {
        alert("Goodbye!");
        break;
      }
    }
  }
}

let atm = new ATM("1234", 1000);
atm.start();