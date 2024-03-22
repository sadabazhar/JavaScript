/*
Lexical scope: Functions create scopes, and variables declared within a function are accessible
only within that function and any nested functions. This is called lexical scoping.


Closure: When a function is created inside another function, it can keep access to the things 
(like variables) in the outer function, even after the outer function has finished running.
*/


//Without Lexical scoping and closure

function outerFunction() {
    var outerVar = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVar);
    }
    
    innerFunction(); 
}

outerFunction();
/*
In this example, we call innerFunction immediately within outerFunction. 
However, if we try to call innerFunction from outside outerFunction, 
it will result in an error because innerFunction is not accessible outside outerFunction. 
Without lexical scoping and closure, innerFunction cannot retain access to outerVar once outerFunction has finished executing.
*/


//With Lexical scoping and closure

function outerFunction() {
    var outerVar = 'I am from outerFunction';
  
    function innerFunction() {
      console.log(outerVar);
  
    return innerFunction;
  }
}

var closureFunction = outerFunction();
closureFunction();

/*
In this example, innerFunction remembers the outerVar variable even 
after outerFunction has finished executing. This is possible due to closure.
*/
