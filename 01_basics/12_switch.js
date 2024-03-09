// swith


//simple
let fruit = 'Apple';
switch (fruit) {
    case 'Banana':
        console.log('Banana is good for health');
        break;
    case 'Apple':
        console.log('An apple a day keeps the doctor away');
        break;
    default:
        console.log('Unknown fruit');
}

// little bit complex
function daysInMonth(month) {
    let days;
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            days = 31;
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            days = 30;
            break;
        case "February":
            days = "28 or 29";
            break;
        default:
            days = "Invalid month";
    }
    return days;
}


console.log("January has " + daysInMonth("January") + " days.");
console.log("February has " + daysInMonth("February") + " days.");
console.log("April has " + daysInMonth("April") + " days.");