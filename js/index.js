// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
const myArray = [10, 20, 30, 40, 50];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (const value of myArray) {
    console.log(value);
}

myArray.forEach(value => {
    console.log(value);
});

for (let value of myArray) {
    value = value * 20;
}

console.log(myArray); 

myArray.forEach(value => {
    value = value * 20; 
});

console.log(myArray);
