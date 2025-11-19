// a conditional statement lets your code make decisions.
// it checks if something is true or false and then run certain code based on that. 

// IF ELSE STATEMENT =>
// let product = 0;
// if (product <= 0){
//     console.log("product is out of stock");
// }
// else{
//     console.log("product in stock");
// }

// let temperature = 34;
// if (temperature >= 30){
//     console.log("It's to hot");
// }
// else{
//     console.log("it's cold");
// }


// IF ELSE , ELSE IF (ELSE IF LADDER)
// let score = 89;
// if (score >= 90){
//     console.log("Garde A");
// }
// else if (score >= 80 && score < 90){
//     console.log("Grade B");
// }
// else if (score >= 70 && score < 80){
//     console.log("Grade C");
// }
// else if (score >= 60 && score < 70){
//     console.log("Grade D");
// }
// else if (score >= 50 && score < 60){
//     console.log("Grade E");
// }
// else{
//     console.log("Congrats you are fail..");
// }


// NESTED IF ELSE 
// let age = 23;
// let hasId = true;

// if (age >= 18){
//     if (hasId){
//         console.log("You can go to club");
//     }
//     else{
//         console.log("You need an Id Card");
//     }
// }
// else{
//     console.log("You can't go to club");
// }

// SWITCH STATEMENT 
// let color = "red";
// switch(color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Caution");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Color");
// }

// challenge 1
let cartValue = 120;
let finalValue;

if (cartValue < 50){
    console.log("No discount is applied");
}
else if (cartValue >= 50 && cartValue < 100){
    finalValue = cartValue - (cartValue * 0.1);
    console.log("A 10% discount is applied");
}
else if (cartValue >= 100){
    finalValue = cartValue - (cartValue * 0.2);
    console.log("A 20% discount is applied");
}
console.log(`The final cart value is ${finalValue.toFixed(2)}`);
