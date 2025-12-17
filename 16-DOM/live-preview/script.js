let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");

// console.log(nameInput, emailInput, userName, userEmail);

nameInput.addEventListener("input", function(e){
    userName.textContent = e.target.value;
})
emailInput.addEventListener("input", function(e){
    userEmail.textContent = e.target.value;
})