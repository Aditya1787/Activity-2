function showAlert(){
    alert("Hello everyone")
}

function name(para1, para2){
    // body
}
let user1 = new Object() // obj constructer 
let user2 = {} // literal syntax

let user = {
    name: 'test', 
    age: 23
}

// Create an empty obj 
// add rhte property naem wiht value 
// add property surname with the name to Alex 
// change the value of the name to alex 
// Remove the property name from the object
// Create an empty object
let obj = {};
obj.name = "John"; 
obj.surname = "Alex";
obj.name = "alex";
delete obj.name;
console.log(obj);

let amount = {
    a:100, 
    b:200,
    c:600
}

let totalAmount = Object.values(amount).reduce((sum, value) => sum + value, 0);
console.log(totalAmount)


//! iuhdfi

const square = x  => x * x;
const greet = () => {
    console.log("Hello world")
}
greet()

const add = (a, b)=>a+b;
console.log(add(4, 5))

const createPerson = (name, age)=>({
    name:name, 
    age:age,
});
const person= createPerson('Aditya', 12);
console.log(person)