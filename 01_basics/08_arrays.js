/* Array is a special object in js that is used to store
multiple values of similar data items. */


// creating array
let arr = [1,2,3,4,5,6,7];
let arr2 = ["Sadab", "Wasif", "Saif", "Etc"];
console.log(`Without new keyword: ${arr}`);


// Another way to creating an array
let newarr = new Array(1,2,3,4,5,6,7);
console.log(`With new keyword: ${newarr}`);


// Common Array methods:

// push(): Adds new elements to the end of an array
    
    let fruits1 = ["Apple", "Banana"];
    fruits1.push("Mango");
    console.log("fruits1:  " + fruits1); // ["Apple", "Banana", "Mango"]
    
// pop(): Removes the last element from an array
    
    let fruits2 = ["Apple", "Banana", "Mango"];
    fruits2.pop();  
    console.log("fruits2:  " + fruits2); // ["Apple", "Banana"]
    
// shift(): Removes the first element from an array
    
    let fruits3 = ["Apple", "Banana", "Mango"];
    fruits3.shift();
    console.log("fruits3:  " + fruits3); // ["Banana", "Mango"]
    
// unshift(): Adds new elements to the beginning of an array
    
    let fruits4 = ["Banana", "Mango"];
    fruits4.unshift("Apple");  
    console.log("fruits4:  " + fruits4);  // ["Apple", "Banana", "Mango"]
    
    
// concat(): Joins two or more arrays, and returns a copy of the joined arrays.
    
    let fruits5 = ["Apple", "Banana"];
    let moreFruits = ["Mango", "Pineapple"];
    let allFruits = fruits5.concat(moreFruits);
    console.log("fruits5:  " + fruits5);  // // no changes
    console.log("allFruits:  " + allFruits);  // // ["Apple", "Banana", "Mango", "Pineapple"]
    
    
// slice(): Selects a part of an array
    
    let fruits6 = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
    let fevFruits = fruits6.slice(2, 4);  
    console.log("fruits6:  " + fruits6);  // no changes
    console.log("fevFruits:  " + fevFruits);  // ["Mango", "Orange"]
    
    
// reverse(): Reverses the order of the elements in an array
    
    let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
    fruits7.reverse();  
    console.log("fruits7:  " + fruits7);  // ["Mango", "Apple", "Orange", "Banana"]



/* Some operation of array */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// We can concate array using ... (spread operator)
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

// Access array element
console.log(all_heros[2]);

// Find array element
console.log(all_heros.includes("spiderman"));