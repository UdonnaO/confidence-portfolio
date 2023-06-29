

let burger = document.querySelector('.burger');
let isClicked = true;
const menu = document.querySelector('.menu2');

burger.addEventListener("click", revealMenu);

function revealMenu(){
    if (isClicked) {
        menu.style.display = "inline";
        isClicked = false;
    }else {
        menu.style.display = "none";
        isClicked = true;
    }
}