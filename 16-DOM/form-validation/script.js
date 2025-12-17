let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#Password");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

// console.log(nameInput, emailInput, passwordInput);

nameInput.addEventListener("input", function(e){
    let name = e.target.value;
    if (name.length < 3){
        nameError.textContent = 'name must be atleast 3 character long';
    }else{
        nameError.textContent = "";
    }
})
emailInput.addEventListener("input", function(e){
    let email = e.target.value;
    if (!(email.includes("@gmail.com"))){
        emailError.textContent = "email should contain @ or gmail.com"
    }else{
        emailError.textContent = "";
    }
})
passwordInput.addEventListener("input", function(e){
    let password = e.target.value;
    if (password.length < 6 ){
        passwordError.textContent = "password length must be greater than 8 characters";
    }else{
        passwordError.textContent = "";
    }
})