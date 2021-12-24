const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const form = document.querySelector("form");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("hide-menu");
    menuBtn.classList.toggle("btn-slide");
});

form.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains("submit")){
        e.target.children[0].classList.add("paper-plane-move")
    }
})

form.addEventListener("mouseout", function(e) {
    if(e.target.classList.contains("submit")){
        e.target.children[0].classList.remove("paper-plane-move")
    }
})