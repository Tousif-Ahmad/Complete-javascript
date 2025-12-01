let firstBtn = document.querySelector(".firstBtn");
// firstBtn.onclick = ()=>{
//     console.log("me property wala method hon..");
// }
// firstBtn.ondblclick = ()=>{
//     console.log("double click howa he..");
// }

// firstBtn.addEventListener("click", function(){
//     console.log("ye listener wala method he..");
// })
// firstBtn.addEventListener("click", function(){
//     console.log("ye listener wala method he 2..");
// })

// let showConsole = function(){
//     console.log("first");
// }
// firstBtn.addEventListener("click", showConsole);
// firstBtn.removeEventListener("click", showConsole);

firstBtn.addEventListener("click", function(e){
    console.log(e);
})
