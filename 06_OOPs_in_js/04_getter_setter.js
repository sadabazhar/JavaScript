/*
Getters and setters are special methods in JavaScript 
that allow you to define how properties of an object are accessed and modified.
They provide a way to control access to object properties, enabling you to perform additional actions.
*/

// Class-based getter and setter

class User1 {
    constructor(email, password){
        this._email = email;
        this._password = password;
    }

    get email(){
        return this._email.toLowerCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}12421`;
    }

    set password(value){
        this._password = value;
    }
}

const Sadab1 = new User1("Sadab@123", "Sadab12");
console.log("Class-based");
console.log(Sadab1.email);
console.log(Sadab1.password);


// Function-based getter and setter

function User2(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toLowerCase();
        },
        set: function(value){
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}12421`;
        },
        set: function(value){
            this._password = value;
        }
    });
}

const Sadab2 = new User2("Sadab@ai", "sadab@12");
console.log("Function-based");
console.log(Sadab2.email);
console.log(Sadab2.password);


// Object-based getter and setter

const User3 = {
    _email: 'Sadab@gmail.com',
    _password: "sadab@1",

    get email(){
        return this._email.toLowerCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return `${this._password}12421`;
    },

    set password(value){
        this._password = value;
    }
};

const Sadab3 = Object.create(User3);
console.log("Object-based");
console.log(Sadab3.email);
console.log(Sadab3.password);
