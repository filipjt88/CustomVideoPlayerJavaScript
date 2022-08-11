let playIcon   = document.querySelector("#play-icon");
let reloadIcon = document.querySelector("#reload-icon");
let video      = document.querySelector("video");



playIcon.addEventListener("click", () => {
    if(playIcon.className === "fa-solid fa-play") {
        playIcon.className = "fa-solid fa-pause";
        video.play();
    } else if(playIcon.className === "fa-solid fa-pause") {
        playIcon.className = "fa-solid fa-play";
        video.pause();
    }
});


reloadIcon.addEventListener("click", () => {
        video.load();
        playIcon.className = "fa-solid fa-play";
});
