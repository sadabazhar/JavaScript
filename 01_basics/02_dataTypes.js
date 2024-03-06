"use strict"; // strict mode on

/*
Using `"use strict"` in JavaScript provides the following benefits:

1. Enhanced Error Detection: Catches common coding mistakes and potential bugs early.

2. Improved Security: Disables unsafe features, enhancing code security.

3. Better Code Quality: Encourages disciplined coding practices, leading to more maintainable code.

4. Performance Optimization: Can lead to performance improvements by allowing better optimization by the JavaScript engine.

In short, `"use strict"` helps make your JavaScript code safer, cleaner, and more efficient.
*/ 



//All data types


// 1. String:

let name = 'John'; // Using single quotes
let greeting = "Hello"; // Using double quotes
let sentence = `My name is ${name}`; // Using backticks (template literals)

// 2. Number:

let integer = 10; // An integer
let floatingPoint = 10.5; // A floating-point number


// 3. BigInt:

let bigNumber = 900719925124740999n; // A BigInt

// 4. Boolean:

let isTrue = true; // Boolean true
let isFalse = false; // Boolean false


// 5. Undefined:

let testVar; // Declared but not defined

// 6. Null:
let emptyVar = null; // Assigned a null value


// 7. Symbol: It's a unique and immutable data type and is often used as an identifier for object properties.

const mySymbol = Symbol('mySymbol');
const obj = {};
obj[mySymbol] = 'value';


// 8. Object: It's used to store collections of data and more complex entities.
let person = {firstName: "John", lastName: "Doe"}; // An object

console.log(
 [`String = ${name}`],
 [`Number = ${integer}`],
 [`BigInt = ${bigNumber}`], 
 [`Boolen = ${isTrue}`], 
 [`Undefined = ${testVar}`], 
 [`Null = ${emptyVar}`], 
 [`Symbol = ${obj[mySymbol]}`], 
 [`Object = ${person}`]
 );


 // typeof operator: It is used for checking datatype
 console.log(`Type of ${person} is ` + typeof person); //Object