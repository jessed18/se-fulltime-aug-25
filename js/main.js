console.log("hello,world");

let name = "jesse";
let age = "21";

console.log("My name is "+name+ "and my age is" +age);

let x = 10;
let y = 5;

console.log("sum:", x+y);

// logical operators
let a = 10, b = 20;
console.log(a>5 && b>10);

// switch case

switch(expression){
    case value1:
        //code

    case value2:
        break;

        case value3:
            break;
}

let day = 3;

switch(day){
case value1:
    console.log("monday")
    break;

    case value2:
     console.log("tuesday")
    break;

    case value3:
      console.log("wednesday")
    break;

    default:
        console.log("invalid");
}


let grade = "B";

switch(grade){
  case "A":
    console.log("amazing");
    break;

  case "B":
    console.log("good");
    break;

  case "C":
    console.log("mid");
    break;

  case "D":
    console.log("not good");
    break;

  case "F":
    console.log("fail");
    break;

  default:
    console.log("invalid grade");
}