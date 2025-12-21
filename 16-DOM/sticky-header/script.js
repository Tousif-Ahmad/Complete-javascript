let nav = document.querySelector("nav");
window.addEventListener("scroll", function(det){
    if (this.window.scrollY > 100){
        nav.classList.add("stick");
        
    }else{
        nav.classList.remove("stick")
    }
    console.log(this.window.scrollY);
})