let songBox = document.querySelectorAll(".songbox");
let masterPlay = document.querySelectorAll(".masterplay");



/*document.querySelectorAll(".songbox").forEach(songboxTile => {
        songboxTile.addEventListener("mouseover", (event) => {
                // event.target.querySelector('.masterplay').children[2].children[0].style.visibility = "visible";
                event.target.querySelector(".masterplay").style.visibility = "visible";
        });
        songboxTile.addEventListener("mouseout", (event) => {
                // event.target.querySelector('.masterplay').children[2].children[0].style.visibility = "visible";
                event.target.querySelector(".masterplay").style.visibility = "hidden";
        });
});
// songBox.addEventListener("mouseout", () => {
//         masterPlay.style.visibility = "hidden";
// });*/


songBox.forEach(songBoxTile => {
        songBoxTile.addEventListener("mouseover", () =>{
                masterPlay.forEach(masterPlayBtn => {
                        masterPlayBtn.style.visibility = "visible";
                });
        });
        songBoxTile.addEventListener("mouseout", () =>{
                masterPlay.forEach(masterPlayBtn => {
                        masterPlayBtn.style.visibility = "hidden";
                });
        });
});
