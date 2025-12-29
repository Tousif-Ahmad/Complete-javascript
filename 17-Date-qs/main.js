// q1. guess the output
// let date = new Date(0);
// console.log(date.toString());

// q2. validate that a user selected date range is  no longer than 30 days.
let date = new Date('2026-01-27');   /* YY-MM-DDTHH:mm:ss.sssZ */
let userDate = new Date('2026-06-23');
let diff = userDate - date;
let noOfDays = Math.floor(diff / 1000 / 60 / 60 / 24)
if (noOfDays > 30){
    console.log("You can't fill the form");
}else{
    console.log("You can fill this form");
}
// q3. calculate difference between two dates in the format of years , months , days, hours 
// minutes, seconds.


// q4. Add or subtract n days from a given date . (e.g 7 days to 2025-5-01);

// q5. calculate the user age from their date of birth .
