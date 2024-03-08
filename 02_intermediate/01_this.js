// this refer to the current object 

// Without this keyword
const person = {
    name: 'Sadab',
    greet: function() {
      console.log(`Hello, my name is ${name}.`);
    }
};
// person.greet(); // Error bcz: name is not defined within the scope of the function.

// With this keyword
const person2 = {
    name: 'Sadab',
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
};
person2.greet(); // greet function to access the name property without any errors.


// When used alone, this refer to the global object i.e; Window object (In browser)

console.log(this);

// In strict mode this is undefined

function msg(){
    "use strict";
    console.log(this);
}
msg();

// In function this is refers to the global object

function msg(){
    console.log(this);
}
msg();