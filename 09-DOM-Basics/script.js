/*
5 phases of DOM Manipulation 

1. DOM  ✔
2. selection of html elements ✔
3. How to change or manipulate html ✔
4. how to change css ✔
5. Event Listener (Events ko kaise suna jaye) ✔

*/

// let a = document.querySelector("h1");
// a.innerHTML = "No i am tousiff";
// a.style.backgroundColor = "red";

// a.addEventListener("click", function(){
//     console.log("alpha..");
// })

// let p = document.querySelector("p");
// p.innerHTML = "i am a student of BSCS at university of Peshawar";

// console.log(a);
// console.log(p);


// BASIC PROJECT 
let div = document.querySelector("div");
let onBtn = document.querySelector(".onBtn");
let offBtn = document.querySelector(".offBtn");

onBtn.addEventListener("click", function(){
    div.style.scale = "1";
})
offBtn.addEventListener("click", function(){
    div.style.scale = "0.5";
})