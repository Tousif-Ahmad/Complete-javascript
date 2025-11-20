//  BEGINNER LEVEL 
// q1.
// let num = +prompt("Enter a Number");
// if (num > 0){
//     console.log("Positive");
// }
// else if (num < 0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero (0)");
// }

// q2.
// let marks = +prompt("Enter your marks (0-100)");
// if (marks >= 40){
//     console.log("Congart's you are pass");
// }
// else{
//     console.log("Your are Fail Best of luck next time ");
// }

// q3. 
// let age = +prompt("Enter your age");
// if (age >= 18){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

// q4. 
// let ch = prompt("Enter a character..");
// if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U" || ch === "a"
//     || ch === "e" || ch === "i" || ch === "o" ||ch === "u"){
//         console.log("Vowel");
//     }
// else{
//     console.log("Not Vowel");
// }

// q4 , SECOND APPROACH 

// let ch = prompt("Enter a ch...");
// let lowerCh = ch.toLowerCase();

// let vowels = "aeiou";
// if (vowels.includes(lowerCh)){
//     console.log("Vowel");
// }
// else{
//     console.log("Not Vowel");
// }

// q5. 
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// if (num1 > num2){
//     if (num1 > num3){
//         console.log("Num3 is greatest");
//     }
//     else{
//         console.log("Num3 is greatest");
//     }

// }
// else{
//     if (num2 > num3){
//         console.log("Num2 is greatest");
//     }
//     else{
//         console.log("Num3 is greatest");
//     }
// }

//  INTERMEDIATE LEVEL
// q1. 
// let salary = prompt("Enter your salary..");
// let taxAmount = 0;
// let finalSalary = 0;

// if (salary <= 50000){
//     console.log("No Tax is applied");
// }
// else if (salary > 50000 && salary <= 1000000){
//     taxAmount = (salary * 10) / 100;
//     console.log("A 10% tax is applied");
// }
// else{
//     taxAmount = (salary * 20) / 100;
// }

// finalSalary = salary - taxAmount;

// console.log("----------- Salary Tax Resport ----------");
// console.log("salary =", salary);
// console.log("Tax Rate Applied: " + (taxAmount / salary * 100 || 0) + "%");
// console.log("final salary", finalSalary);

// q2. 
let year = +prompt("Enter a year...");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("It is leap year");
}
else{
    console.log("Not a leap year...");
}