let songBox = document.querySelector(".songbox");
let masterPlay = document.querySelector(".masterplay");


songBox.addEventListener("mouseover", () => {
        masterPlay.style.visibility = "visible";
});
songBox.addEventListener("mouseout", () => {
        masterPlay.style.visibility = "hidden";
});