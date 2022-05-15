let songBox = document.querySelectorAll(".songbox");
let masterPlay = document.querySelectorAll(".masterplay");

let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector("#close");
let sideNav = document.querySelector(".sidenav");
let sideUl = document.querySelector('#sidenavlist')
let logo = document.querySelector("#logo");
let sideBrand = document.querySelector(".sidebrand");



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

menuBtn.addEventListener('click', () => {
        sideNav.style.width = "90%";
        sideUl.style.visibility = "visible";
        sideBrand.style.visibility = "visible";
        logo.style.visibility = "visible";
        closeBtn.style.visibility = "visible";
});
closeBtn.addEventListener('click', () => {
        sideNav.style.width = "0%";
        sideUl.style.visibility = "hidden";
        sideBrand.style.visibility = "hidden";
        logo.style.visibility = "hidden";
        closeBtn.style.visibility = "hidden";
});


