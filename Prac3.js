// Let and Const keywords
let x = 5;
const PI = 3.14;

// Arrow Functions
const add = (a, b) => a + b;

// Spread Operator
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];

// For/of loop
let fruits = ["Mango", "Banana", "stowbarry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Map Objects
let map = new Map();
map.set("name", "Tris");
map.set("age", 25);

// Set Objects
let set = new Set([1, 2, 3, 4, 4, 5]);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
let person = new Person("Jay", 30);
person.displayDetails();

// Promises
function fetchData() {
  return new Promise((resolve, reject) => {

    resolve("Data fetched successfully!");
  });
}

// Symbol
const uniqueId = Symbol("id");

// Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();

// Function Rest Parameter
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));
