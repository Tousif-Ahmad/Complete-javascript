let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector(".colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".colorName");
let body = document.querySelector("body");

const colorArray = ["red", "blue", "yellow", "teal", "pink", "white", "black", "lightseagreen", "lightcoral"];

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 10);
    return colorArray[randomNumber];
}

// generateRandomNumber()
function changeColor(color){
    body.style.backgroundColor = color;
    currentColorValue.textContent = color;
    if (isNaN(color) || " "){
        alert("Please enter a valid color..")
    }
}

function handleRandomBtn(){
    let color = generateRandomNumber();
    changeColor(color);
}

function handleApplyBtn(){
    const color = colorInput.value;
    changeColor(color);
    
}



randomBtn.addEventListener("click", handleRandomBtn);
applyBtn.addEventListener("click", handleApplyBtn);
