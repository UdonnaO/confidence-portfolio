
let isClicked = true;
const readMoreContent = document.querySelector(".read-more")
const readMore = document.querySelector(".btn-read-more");

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