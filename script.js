// Variables
const audio = document.getElementById("audio")
const music = document.getElementById("music")
const musicTitle = document.getElementById("music-title")
const progress = document.getElementById("progress")
const diskImage = document.getElementById("disk-image")
const image = document.getElementById("image")
const backwardBtn = document.getElementById("backward")
const playPauseBtn = document.getElementById("play-pause")
const forwardBtn = document.getElementById("forward")
const Titles = ["hey", "summer", "ukulele"]
let currentMusic = 1


// Event Listeners
playPauseBtn.addEventListener("click", playPause)
audio.addEventListener("timeupdate", timeElapsedAudio)
forwardBtn.addEventListener("click", forward)
backwardBtn.addEventListener("click", backward)

// Play-pause music
function playPause() {
    playPauseBtn.classList.toggle("fa-play")
    playPauseBtn.classList.toggle("fa-pause")
    audio.paused ? audio.play() : audio.pause()

    // animations
    diskImage.classList.toggle("animated")
    music.classList.toggle("animated")
}

// Play music
function play() {
    playPauseBtn.classList.remove("fa-play")
    playPauseBtn.classList.add("fa-pause")
    audio.paused ? audio.play() : false

    // animations
    diskImage.classList.add("animated")
    music.classList.add("animated")
}

// audio progress
function timeElapsedAudio() {
    const duration = audio.duration
    const currentTime = audio.currentTime
    progress.style.width = `${(currentTime / duration) * 100}%`
    currentTime === duration ? forward() : false
}

// define next track
function forward() {
    if (currentMusic < Titles.length) {
        currentMusic++
        updateMusic(Titles[currentMusic - 1])
    } else {
        currentMusic = 1
        updateMusic(Titles[currentMusic - 1])
    }
}

// define previous track
function backward() {
    if (currentMusic > 1) {
        currentMusic--
        updateMusic(Titles[currentMusic - 1])
    } else {
        currentMusic = 3
        updateMusic(Titles[currentMusic - 1])
    }
}

// update music
function updateMusic(music) {
    audio.setAttribute("src", `./music/${music}.mp3`)
    musicTitle.innerText = music
    image.setAttribute("src", `./images/${music}.jpg`)
    play()
}