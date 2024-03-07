/* JavaScript provides a built-in object called `Math` that has properties and methods for mathematical constants and functions.*/

/* 1. Mathematical Constants: JavaScript provides several mathematical constants, which can be accessed as properties of the `Math` object. For example:*/

    Math.PI; // returns PI
    Math.E; // returns Euler's number
    console.log(Math.SQRT2); // returns the square root of 2

/* 2. Rounding Methods: JavaScript provides several methods to round numbers: */

    Math.round(4.6); // returns 5
    Math.ceil(4.2); // returns 5
    Math.floor(4.9); // returns 4
    console.log(Math.trunc(4.9)); // returns 4 (new in ES6)

/* 3. Other Mathematical Functions: JavaScript also provides several other mathematical functions: */
    
    Math.pow(8, 2); // returns 64 (8 to the power of 2)
    Math.sqrt(64); // returns 8 (square root of 64)
    console.log(Math.abs(-4.7)); // returns 4.7 (absolute value of -4.7)
    Math.sin(90 * Math.PI / 180); // returns 1 (the sine of 90 degrees)
    Math.cos(90 * Math.PI / 180); // returns 0 (the cosine of 90 degrees)