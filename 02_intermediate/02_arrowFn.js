/* 
arrow function introduced in ES6 (ECMAScript 2015) and have several advantages:
1. Shorter Syntax
2. Automatically return
etc
*/

// creating arrow fn

const ans1 = (a, b) => {
   return a+b; 
}

const ans2 = (a, b) => a-b; // Automatically return

const ans3 = a => a*a; // Single parameter


// Calling arrow fn

console.log(ans1(3, 1));
console.log(ans2(3, 1));
console.log(ans3(3));


// this with arrow fn

const person = {
    name: 'Sadab',
    greet: () => {
      console.log(`Hello, my name is ${this.name}`); 
    }
};
  
person.greet(); //Undefined