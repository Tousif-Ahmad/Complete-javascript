// q1.
// for (let i = 100; i>=1; i--){
//     console.log(i);
// }

// q2.
// let n = parseInt(prompt("Enter a positive number...."));
// if (isNaN(n) || n <= 0){
//     console.log("Please Enter a valid number..");
// }
// else{
//     console.log(`Printing numbers form 1 to ${n}`);
//     for(let i = 1; i<=n; i++){
//         console.log(i);
//     }
// }

// q3.
// let sum = 0;
// for (let i = 1; i<=10; i++){
//     sum = sum + i;

// }

// q4.

// console.log(sum);
// let fact = 1;
// for (let i = 1; i<=3; i++){
//     fact = fact * i;

// }
// console.log(fact);

// q7. NUMBER KNOCK GAME
// let computerNumber = 8;
// let guess = Number(prompt("Enter correct number ..."));

// while (guess !== computerNumber) {
//     guess = prompt("Enter correct number...")
//   if (isNaN(guess)) {
//     alert("Please enter a valid number...");
//   } else if (guess < computerNumber) {
//     alert("Number is too low, try again");
//   } else if (guess > computerNumber) {
//     alert("Number is high, please try again..");
//   } else {
//     alert("COngratulations! Your guess is correct..");
//     break;
//   }
// }

// q8. PASSWORD CHECKER
// let userPassword = "sam321";
// let noOfAttempts = 0;
// let password = null;

// while(password !== userPassword && noOfAttempts < 3){
//     password = prompt("Enter correct password...");
//     noOfAttempts++;
//     if (password === userPassword){
//         alert("Congratulations! Your password is matched")
//     }
//     else if (noOfAttempts >= 3){
//         alert("please try again later your attempts are over....")
//     }
//     else{
//         alert("Your password is incorrect try again...")
//     }

// }

// q9. TEXT BASED GAME .....
let playAgain = true;
while (playAgain) {
  alert("You wake up in the dark forest");
  let userChoice = prompt("Do You want to go left or right");
  if (userChoice === "left") {
    alert("You see something shiny in the mud");
    userChoice = prompt("Do you pick it up (Yes or no)");
    if (userChoice === "yes") {
      alert("It is a magical stone! you are teleported safety, you win");
    } else {
      alert("You sink into the mud, Game over...");
    }
  } else {
    alert("You find a cave...");
    userChoice = prompt("Do you enter the cave? (Yes or no)");
    if (userChoice === "yes") {
      alert("A dragon wakes up and chases you away, you barely escape...");
    } else {
      alert(
        "You set a up a camp outside the cave. A peaceful night under stars, You Win.."
      );
    }
  }
  userChoice = prompt("Do you want to play again ? (yes or no)");
  if (userChoice === "no"){
    playAgain = false;
    alert("Thanks for playing...")
  }
}
