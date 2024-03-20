/*
In JavaScript, the static keyword is used to define a static method or property for a class. 
Static methods and properties belong to the class itself rather than to instances of the class. 
This means you can access them directly through the class without creating an instance.
*/

class MathUtils {
    // Static method to calculate the square of a number
    static square(number) {
      return number * number;
    }

    root(number, n) {
        
        if (number < 0 || n <= 0) {
          return NaN; 
        }

        if (n === 1) {
          return number;
        }
      
        return Math.pow(number, 1 / n);
    }
}
  
// Using the static method without creating an instance
console.log(MathUtils.square(5));

// First we need to create instance of class
const obj = new MathUtils();
console.log(obj.root(62, 2));
