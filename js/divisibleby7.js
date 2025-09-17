let start = parseInt(prompt("Enter starting point of the loop:"));
let end = parseInt(prompt("Enter ending point of the loop:"));

for (let i = start; i >= end; i--) {
  if (i % 7 === 0) {
    console.log("JS " + i);
  }
}

