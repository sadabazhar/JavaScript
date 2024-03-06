/*
01. Implicit Conversion is when JavaScript automatically converts one data type to another. Here are some examples:
*/

// Implicit Conversion to String
let result;
result = '3' + 2;  // "32"
result = '3' + true;  // "3true"
result = '3' + undefined;  // "3undefined"
result = '3' + null;  // "3null"

// Implicit Conversion to Number
result = '4' - '2';  // 2
result = '4' - 2;  // 2
result = '4' * 2;  // 8
result = '4' / 2;  // 2

// Non-numeric String Results to NaN
result = 'hello' - 'world';  // NaN
result = '4' - 'hello';  // NaN

// Implicit Boolean Conversion to Number
result = '4' - true;  // 3
result = 4 + true;  // 5
result = 4 + false;  // 4

// null Conversion to Number
result = 4 + null;  // 4
result = 4 - null;  // 4

// undefined used with number, boolean or null
result = 4 + undefined;  // NaN
result = 4 - undefined;  // NaN
result = true + undefined;  // NaN
result = null + undefined;  // NaN


/*
02. Explicit Conversion is when you manually convert one data type to another. This is done using built-in methods. Here are some examples:
*/

// Convert to Number Explicitly
let result2;
result2 = Number('324');  // 324

// Convert a number to a string
const number = 30;
console.log(typeof number); //number
const numberConvert = String(number);
console.log(typeof numberConvert); //String
console.log(numberConvert);  // "30"