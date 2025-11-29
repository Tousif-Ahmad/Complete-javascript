let firstBtn = document.querySelector(".firstBtn");
let box = document.querySelector(".box");

// mouseup and mousedown
// firstBtn.addEventListener("mousedown", function(){
//     console.log("Mouse Down");
// })
// firstBtn.addEventListener("mouseup", function(){
//     console.log("Mouse up");
// })

// mouseenter and mouseleave 
// box.addEventListener("mouseenter", function(){
//     console.log("mouse enter");
// })
// box.addEventListener("mouseleave", function(){
//     console.log("mouse leave");
// })

// mouseover and mouseout 
// box.addEventListener("mouseover", function(){
//     console.log("mouse move ho rha hee..");
// })

// box.addEventListener("contextmenu", function(){
//     console.log("open ho gya context menu");
// })


// mousemove 
// box.addEventListener("mousemove", (e)=>{
//     console.log(e);
// })

// KEYBOARD EVENTS 
firstBtn.addEventListener("keypress", function(){
    console.log("Key press ho gya he...");
})
firstBtn.addEventListener("keyup", function(){
    console.log("key down ho gya.");
})
firstBtn.addEventListener("keydown", function(){
    console.log("key down ho gya..");
})