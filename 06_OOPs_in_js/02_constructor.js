// Classes were introduced in ECMAScript 2015 (ES6)
/* 
Constructor is a special type of function 
that is used to create and initialize objects.
when instance of a class is created using the new keyword,
the constructor automatically invoked.
*/

class User {
    constructor(username, gmail, password){
        this.username = username;
        this.gmail = gmail;
        this.password = password;
    }

    passEncryption(password){
        return `${password}cdssb`;
    }

    passDecryption(password){
        const length = password.length;
        const decryptedPassword = password.slice(0, length+1);
        return decryptedPassword;
    }
}

const user = "sadab";
const gmail = "sadabazhar@gmail.com";
let password = "sadab123";
const obj = new User(user, gmail, password);
console.log(obj.passEncryption(obj.password)); 
console.log(obj.passDecryption(obj.password));
