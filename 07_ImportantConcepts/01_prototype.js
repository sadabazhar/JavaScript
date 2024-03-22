// The behavior of JavaScript is prototype-based

/*
Every object in JavaScript has an internal reference
to another object called its prototype.

When you try to access a property or method on an object,
JavaScript first checks if that property or method exists on the object itself.
If it doesn't find it, it looks up the prototype chain to find it in the object's prototype.
*/

function sqrt(num) {
    return num * num;
}

// Adding a custom property 'mynum' to the sqrt function
sqrt.mynum = 2;

console.log(sqrt(5));
console.log(sqrt.mynum);
console.log(sqrt.prototype);

// Defining a constructor function to create user objects
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Adding methods to the prototype of the createUser constructor function

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
}

// Creating instances of createUser
const ex1 = new createUser("uvw", 251);
const ex2 = new createUser("xyz", 255);

ex2.increment();
ex2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


let myHerosArr = ["thor", "spiderman"]


let heroPowerObj = {
    ironman: "highIQ",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Adding a method to the prototype of Object to be accessible by all objects
Object.prototype.Sadab = function(){
    console.log(`Sadab is present in all objects`);
}

// Adding a method to the prototype of Array to be accessible by all arrays
Array.prototype.heyAzhar = function(){
    console.log(`Azhar says hello`);
}

heroPowerObj.Sadab()
// Arrays inherit from Object, so they also have access to methods in the Object prototype
myHerosArr.Sadab()
myHerosArr.heyAzhar()
// Objects don't inherit from Array, so they don't have access to methods in the Array prototype
// heroPowerObj.heyAzhar() //Error