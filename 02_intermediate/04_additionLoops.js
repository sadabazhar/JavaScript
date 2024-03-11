/* 
1. for of (loop) 

uses:
Iterating over the elements of an array.
Iterating over the characters of a string.
*/

const arr = [1, 2, 3];
for (const value of arr) {
    console.log(value);
}


/* 
2. for in (loop) 

uses:
Iterating over the properties of an object.
*/

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key + ": " + obj[key]);
}


/* 
3. foreach (loop) 

uses:
Execute a function for each element of an array without manually managing the loop counter.
*/

const arr2 = [1, 2, 3];
arr2.forEach(function(value) {
    console.log(value);
});


/* 
4. map (loop) 

uses:
Transforming each element of an array (e.g., doubling, squaring, converting types).
Applying a function to each element and returning a modified version of the array.
*/

const arr3 = [2, 3, 4];
const squared = arr3.map(function(value) {
    return value * 2;
});
console.log(squared); // Output: [4, 6, 8]



/* 
5. filter (loop) 

uses:
Filtering elements based on a specific condition (e.g., selecting even numbers, removing null or undefined values).
Creating a subset of an array based on certain criteria.
*/

const arr4 = [1, 2, 3, 4, 5];
const evenNumbers = arr4.filter(function(value) {
    return value % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


/* 
6. reduce (loop) 

uses:
Filtering elements based on a specific condition (e.g., selecting even numbers, removing null or undefined values).
Creating a subset of an array based on certain criteria.
*/

const arr5 = [1, 2, 3, 4, 5];
const sum = arr5.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
