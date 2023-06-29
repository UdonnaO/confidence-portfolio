
let burger = document.querySelector('.burger');
let isClicked = true;
const readMoreContent = document.querySelector(".read-more")
const readMore = document.querySelector(".btn-read-more");
const menu = document.querySelector('.menu');

readMore.addEventListener("click", reveal);

function reveal(){
    if (isClicked) {
        readMoreContent.style.display = "inline";
        readMore.innerHTML = "Read less";
        isClicked = false;
    }else {
        readMoreContent.style.display = "none";
        readMore.innerHTML = "Read more";
        isClicked = true;
    }
}

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
