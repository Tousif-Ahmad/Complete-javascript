// let form = document.querySelector("form");
// let userName = document.querySelector(".name");
// let btn = document.querySelector("button");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("submit ho gya ");
// })

// userName.addEventListener("focus", function(){
//     console.log("focus ho gya ..");
// })
// userName.addEventListener("blur", function(){
//     console.log("blur ho gya ..");
// })
// userName.addEventListener("input", function(){
//     console.log("input  ho rha hee ..");
// })

// QUESTION 1
// let increment = document.querySelector(".incre");
// let decrement = document.querySelector(".decre");
// let counter = document.querySelector(".counter");
// let count = 0;

// function updateDisplay(){
//     counter.textContent = count;
// }
// function handleIncrement(){
//     count++;
//     updateDisplay();
// }
// function handleDecrement(){
//     if (count < 1){
//         return;
//     }
//     count--;
//     updateDisplay();
// }

// increment.addEventListener("click", handleIncrement);
// decrement.addEventListener("click", handleDecrement);

// QS 2 
let form = document.querySelector("form");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let btn = document.querySelector(".submitBtn");
let body = document.querySelector("body");

// console.log(form, userName, userEmail, btn);
form.addEventListener("submit", function(e){
    e.preventDefault();
    if (!userName.value || !userEmail.value){
        alert("please fill all the fields..")
        return;
    }

    let div = document.createElement("div");
    div.innerHTML = `<p>Name : ${userName.value}</p> 
    <p>Email : ${userEmail.value}</p>`
    body.append(div);
})
