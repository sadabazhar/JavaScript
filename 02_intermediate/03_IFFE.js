/*
IFFE => Immediately Invoked Function Expression
It allows a function to be executed immediately after it's defined.
The primary reason to use an IIFE is to obtain data privacy because 
any variables declared within the IIFE cannot be accessed by the outside world.
 */

// Creating

//Call itself after defining
(function () { 
    console.log("Inside the IFFE");
}());

(function (roll, name) {
    console.log(`Roll: ${roll} & Name: ${name}`);
}(71, "Sadab"));

const ans = (function (a, b) {
    return a+b; 
}(71, 71));
console.log(ans);