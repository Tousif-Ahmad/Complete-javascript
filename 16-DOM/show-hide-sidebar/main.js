let btn = document.querySelector("button");
let showSideBar = document.querySelector(".showSideBar");

btn.addEventListener("click", function(){
    showSideBar.classList.toggle("showSideBar");
})