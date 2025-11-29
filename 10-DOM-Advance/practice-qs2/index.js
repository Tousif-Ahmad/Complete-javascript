// let body = document.querySelector("body");
// let btn = document.querySelector("button");
// let theme = "light"
// btn.addEventListener("click", function(){
//     if (theme === "light"){
//         body.style.backgroundColor = "black"
//         body.style.color = "white";
//         btn.textContent = "Light theme"
//         theme = "black"
//     }else{
//         body.style.backgroundColor = "white"
//         body.style.color = "black";
//         theme = "light"
//     }
// })

// 2nd approach
// let body = document.querySelector("body");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   if (body.className === "light") {
//     body.className = "dark";
//   } else {
//     body.className = "light";
//   }
// });

// 3rd approach 
let body = document.querySelector("body");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    body.classList.toggle("dark");
})
