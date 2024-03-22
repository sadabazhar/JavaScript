/*
call(), apply(), and bind() are methods that are used to manipulate
the this keyword within functions. They allow you to explicitly 
set the value of this and also pass arguments to a function.
*/

//Without using call(), apply(), and bind()

const person = {
    fullName: function(city, country) {
      console.log(this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country);
    }
}
  
const user = {
    firstName: 'Sadab',
    lastName: 'Azhar'
}

console.log("Before using call(), apply(), and bind()");

// Invoke fullName method on person object with 'user' object and location details
// This approach doesn't work as intended
person.fullName(user, 'Jamshedpur', 'India');


// using call(), apply(), and bind()
console.log("AFter using call(), apply(), and bind()");

// call can be used to refer to another object
person.fullName.call(user, 'Jamshedpur', 'India');


// apply also can be used to refer to another object
// but it can take argument as a array list
person.fullName.apply(user, ['Delhi', 'India']);


// bind can be used to refer to another object and
// create a copy of new function with a specified this context
const bindEx = person.fullName.bind(user, 'Gujrat', 'India');// can't invoke
bindEx(); // Invoke the newly created function