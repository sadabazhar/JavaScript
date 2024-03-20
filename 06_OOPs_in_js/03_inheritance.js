/*
Inheritance in JavaScript refers to the mechanism by which
objects can inherit properties and methods from other objects.
*/


// 1. Ways to Achieve Inheritance:

const courseInfo = {
    courseName: "Fun with js",
    price: 699,
    duration: "5 Months",
    liveClasses: true,
    recording: true,
}

const Teachers = {
    TeachersName : ["Sadab Azhar", " Wasif Raza", " Arshad Jamal"]
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
}

// Applying inheritance by setting the prototype (__proto__) of courseInfo
Object.setPrototypeOf(courseInfo,Teachers);
console.log(`Teachers: ${courseInfo.TeachersName}`);


// spread operator (...) is used to merge the properties from multiple objects into a single object.
Object.setPrototypeOf(courseInfo, {...TeachingSupport, ...TASupport });
console.log(`Price of the course: ${courseInfo.price}`);
console.log(`Time Duration of the course: ${courseInfo.duration}`);


// 2. Ways to Achieve Inheritance:

class Teacher {
    constructor(...tName) {
        this.tName = tName;
    }

    isAvailable() {
        console.log(`Available teachers: ${this.tName}`);
    }
}

class TA {
    makeAssignment = 'JS assignment';
    fullTime = true;
}

// Mixin to combine properties of multiple classes
const mixin = {
    ...new TA() // Spread properties from TA class
};

class Course extends Teacher {
    constructor(userName, ...tName) {
        super(...tName);
        this.userName = userName;
        this.courseName = "Fun with js";
        this.price = 699;
        this.duration = "5 Months";
        this.liveClasses = true;
        this.recording = true;

        //multiple inheritance
        // Copy properties from mixin into Course instance
        Object.assign(this, mixin);
    }

    logIn() {
        console.log(`USERNAME: ${this.userName}`);
    }
}

const CourseObj = new Course("xyz", "Sadab azhar", " Arshad Jamal");

CourseObj.isAvailable();
console.log(`Assignment: ${CourseObj.makeAssignment}`);
