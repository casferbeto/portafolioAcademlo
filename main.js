const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");

let conunt = 0;

iconMenu.addEventListener('click', function(){
    console.log(menu.classList.toggle('menu_show'));
});