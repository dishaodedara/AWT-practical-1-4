let dataArray = [10, "Hello", true, 3.14];


console.log("Array Length: " + dataArray.length);


console.log("Element at index 1: " + dataArray[1]);
console.log("Element at index 3: " + dataArray[3]);


dataArray.push("new element"); 
dataArray.pop(); 
dataArray.shift(); 
dataArray.unshift(100); 
console.log("Array after modifications: " + dataArray.join(", "));
delete dataArray[1]; 
let newArray = dataArray.concat([5, 8]); 
let flatArray = dataArray.flat(); 
dataArray.splice(1, 2, "a", "b"); 
let slicedArray = dataArray.slice(2);


let person = {
  name: "Disha",
  age: 19,
  gender: "Female",
};


function displayPersonDetails(person) {
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("Gender: " + person.gender);
}


displayPersonDetails(person);
