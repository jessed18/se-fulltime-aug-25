let jsonString = '[{"id":1,"name":"jesse","email":"jesse@example.com"},{"id":2,"name":"jake", "email": "jake@example.com}]';

let jObject = JSON.parse(jsonString);

console.log(jObject[1].id);
console.log(jObject[1].email);

let person = {
    name: "kate",
    age: 21,
    email: "kate@gmail.com"
}

let jsonPersonString = JSON.stringify(person);

console.log(jsonPersonString);

document.getElementById('loadUserButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        return response.json();
}).then(data => { 

        console.log(data)
        for (let i = 0; i < data.length; i++)
        {
          document.getElementById('data').innerHTML += `Name is: ${data[i].name} and Email is: ${data[i].email}`
          `<br>`;
        }
   });
})

let nameOfImage = null;
document.getElementById