// if => It executes a block of code if a specified condition is true.

let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// if else => It executes one block of code if a condition is true and another block if the condition is false.

let y = 20;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}

// else if => It allows you to check multiple conditions.

let z = 30;
if (z > 10) {
    console.log("z is greater than 10");
} else if (z === 30) {
    console.log("z is equal to 30");
} else {
    console.log("z is less than 10");
}


// &&, ||, !=

if ((x>y) && (x>z)) {
    console.log("x is greater then y & z");
}else if ((y>x) && (y>z)) {
    console.log("y is greater then x & z");
}else{
    console.log("z is greater then x & y");
}



/* Falsy Values:
false: The boolean value false.
0: The number zero (0).
"": An empty string.
null: Represents the absence of a value.
undefined: Represents an undefined value.
NaN: Not-a-Number.
*/

// All other values in JavaScript are considered truthy, including:

/* Truthy Values:
Any non-empty string ("hello", "0", "false", etc.).
Any non-zero number (positive or negative).
Arrays and objects, even if they are empty ([], {}).
Functions (even empty functions).
true: The boolean value true.
*/


if ("hello") {
    console.log("This will be executed because 'hello' is a truthy value.");
}

if (0) {

}else{
    console.log("This will not be executed because 0 is a falsy value.");
}

if ([]) {
    console.log("This will be executed because an empty array is a truthy value.");
}

if (null) {
    
}else{
    console.log("This will not be executed because null is a falsy value.");
}