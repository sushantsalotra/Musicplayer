let songBox = document.querySelector(".songbox");
let masterPlay = document.querySelector(".masterplay");

let playVisibility = false;

songBox.addEventListener("mouseover", () => {
    if (playVisibility === false){
        masterPlay.style.visibility = "visible";
        playVisibility = true;
    }
});
songBox.addEventListener("mouseout", () => {
    if( playVisibility === true) {
        masterPlay.style.visibility = "hidden";
        playVisibility = false;
    }
});