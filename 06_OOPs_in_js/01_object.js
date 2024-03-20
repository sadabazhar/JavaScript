// Object-oriented programming in JavaScript

// Defining an object 'user' using object literal notation
const user = {
    username: "Sadab", // User's username
    loginCount: 8,     // Number of times user has logged in
    signedIn: true,    // Boolean indicating if user is currently signed in
    
    // Method to get user details
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);     
    }
}

console.log(user.username); 


// Defining a constructor function 'User' to create user objects
function User(username, loginCount, isLoggedIn){

    // this keyword refers to the current execution context.
    this.username = username;
    this.loginCount = loginCount;   
    this.isLoggedIn = isLoggedIn;   

    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

// Creating new user objects using the constructor function
const userOne = new User("Sadab", 16, true);
const userTwo = new User("Wasif", 11, false);

console.log(userOne);
userOne.greeting();
console.log(userTwo);
