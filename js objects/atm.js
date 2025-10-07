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