//JavaScript provides a built-in object called `Date` for handling dates and times:

/* 1. Creating Date Objects: Date objects are created with the `new Date()` constructor.
 There are several ways to create a new date object :*/

    const sysDate = new Date(); // current date and time
    console.log(`Currect date of my system ${sysDate}`)
    new Date(2024, 3, 6, 8, 8, 1, 23); // year, month, day, hours, minutes, seconds, ms

/* 2. Date Strings: JavaScript can create a date object from a date string. */
    
    new Date("October 13, 2014 11:13:00");
    new Date("2022-03-25");

/* 3. Getting Date Components: You can get individual components of a date (like the year, month, day, hour, minute, second) using various `Date` methods.*/

    let date1 = new Date();
    let year = date1.getFullYear(); // returns the year
    console.log(year);
    let month = date1.getMonth(); // returns the month (0-11)
    let day = date1.getDate(); // returns the day of the month (1-31)

/* 4. Setting Date Components: You can also set individual components of a date using various `Date` methods.*/

    let date2 = new Date();
    date2.setFullYear(2023); // sets the year to 2023
    date2.setMonth(11); // sets the month to December
    date2.setDate(31); // sets the day to 31

/* 5. Timestamps: A JavaScript date can be written as a timestamp, representing the number of milliseconds since January 1, 1970.*/
    
    let date = new Date();
    let timestamp = date.getTime(); // returns the number of milliseconds since Jan 1, 1970
