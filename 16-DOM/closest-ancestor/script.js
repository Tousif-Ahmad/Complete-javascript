let child = document.querySelector(".child");
child.addEventListener("click", function(e){
    console.log(e.target.closest(".parent"));
})