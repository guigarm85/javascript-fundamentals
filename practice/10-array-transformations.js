
// JavaScript Arrays - Transformations

let numbers = [1, 2, 3, 4];

// forEach: execute a function for each element
numbers.forEach(num => console.log(num));

// map: create a new array with doubled values
let doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);

// filter: keep only even numbers
let evenNumbersArray = numbers.filter(num => num % 2 === 0);
console.log(evenNumbersArray);

// reduce: add all numbers, starting from 0
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
