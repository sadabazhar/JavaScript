// Object is a collection of keys and their values


// Creating object

let myObj1 = {key1: "Fisrt", key2: "Second"};
console.log(myObj1);
console.log(myObj1.key1);

let myObj2 = new Object() // Another way
console.log(myObj2);
myObj2.key3 = "Third"; // Adding object property
myObj2.key4 = "Fourth";
console.log(myObj2.key4);
console.log(myObj2);


// Deleting Object Properties (Using delete keyword)

delete myObj2.key4;
console.log(myObj2.key4);
console.log(myObj2);


//Checking if a Property Exists

if("key4" in myObj2){
    console.log("key4 is available");
}else{
    console.log("key4 is not available");
}


// Object method

let myObj3 = {
    greeting: function(){
        console.log("Hello, I'm Sadab");
    }
}

myObj3.greeting(); // Calling Object method


// Array of object

let Employs =[
    {name: "Sadab", age: 21},
    {name: "Wasif", age: 22},
    {name: "Saif", age: 21},
]

console.log(Employs);


// Nested Objects (Object inside the object)

let user = {
    userId: "sadabazhar12",
    name:{
        first: "Sadab",
        last: "Azhar"
    },
    number: 3143100000
}

console.log(user);


// Concating object using spread operator

let finalObj = {...myObj1,...myObj2}
console.log(finalObj);