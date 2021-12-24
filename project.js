const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("hide-menu");
    menuBtn.classList.toggle("btn-slide");
});