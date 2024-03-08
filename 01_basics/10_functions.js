// Defining fn

function msg(){ //Simple fn
    console.log("Hii, I'm inside the function");
}

function add(a, b){ //parameterized fn
    return a+b;
}

// We can send infinite number of arguments to the fn using ...(rest)operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}


// Calling fn

msg();

console.log(add(12, 23));

console.log(sum(12, 23, 31, 1, 32, 5));