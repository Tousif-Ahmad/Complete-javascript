let grandParent = document.querySelector(".grandParent")
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// grandParent.addEventListener("click", function(e){
//     // alert("grand parent pe click howa..")
//     console.log("GrandParent");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })
// parent.addEventListener("click", function(e){
//     console.log("Parent");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     // alert("parent pe click howa..")
// })
// child.addEventListener("click", function(e){
//     // alert("child pe click howa..")
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })


// child.addEventListener("click", function(e){
//     // alert("child pe click howa..")
//     console.log("Child");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })


let container = document.querySelector(".container");
container.addEventListener("click", function(e){
    if (e.target.classList.contains("box")){
        console.log(e.target.textContent);
    }
})
