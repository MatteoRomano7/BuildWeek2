const heart = document.getElementById("heart");
const heartFill = document.getElementById("heart-fill");

function heartBtn() {
  heart.style.display = 'none';
  heartFill.style.display = 'block';
}

function heartFillBtn() {
  heart.style.display = 'block'; 
  heartFill.style.display = 'none';
}

heart.addEventListener('click', heartBtn)
heartFill.addEventListener('click', heartFillBtn)



//CENTRAL PLAYER
const audioPlayer = document.getElementById('audioPlayer');
const progressElement = document.getElementById('progress')
const timerElement = document.querySelector('.timer')
const durationElement = document.querySelector('.duration')
const playIcon = document.getElementById('play-icon')
const stopIcon = document.getElementById('stop-icon')

let currentTime = 0
let duration = 30 //DURATION DEL TIMER IN SECONDS
let isPlaying = true //FALSE PER FARLO INZIARE DA SUBITO TRUE PER L INVERSO
let interval

const totalMinutes = Math.floor(duration / 60)
const totalSeconds = duration % 60
const formattedDuration = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`

durationElement.innerHTML = (formattedDuration)

//ADVANCEMENT PROGRESS BAR WITH TIMER
function advanceProgressBar() {
  currentTime += 1
  
  if (currentTime <= duration) {

    const progressWidth = (currentTime / duration) * 100
    progressElement.style.width = `${progressWidth}%`

    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    timerElement.textContent = formattedTime

  } else {
    clearInterval(interval)
    isPlaying = false
    playIcon.style.display = 'block'
    stopIcon.style.display = 'none'
    audioPlayer.pause()
  }
}



function togglePlayback() {
  if (isPlaying) {
    clearInterval(interval)
    isPlaying = false
    playIcon.style.display = 'block'
    stopIcon.style.display = 'none'
    audioPlayer.pause()
  } else {
   
    interval = setInterval(advanceProgressBar, 1000)
    isPlaying = true
    playIcon.style.display = 'none'
    stopIcon.style.display = 'block'
    audioPlayer.play()
    
  }
}


togglePlayback()

playIcon.addEventListener('click', togglePlayback)
stopIcon.addEventListener('click', togglePlayback)


const backBtn = document.getElementById('backbtn')

function resetTimer() {
  currentTime = 0
  const minutes = Math.floor(currentTime / 60)
  const seconds = currentTime % 60
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  timerElement.textContent = formattedTime
  progress.style.width = '0%'
  audioPlayer.currentTime = 0
}

backBtn.addEventListener('click', resetTimer);


//CENTRAL PROGRESSBAR DRAGGING 
const progressContainer = document.querySelector('.progress-bar');
const progress = document.getElementById('progress');

let isDragging = false

progressContainer.addEventListener('mousedown', (e) => {
  isDragging = true
  updateProgress(e)
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    updateProgress(e)
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false
});

function updateProgress(event) {
  const rect = progressContainer.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const containerWidth = rect.width
  
  let newWidth = (offsetX / containerWidth) * 100
  newWidth = Math.max(0, Math.min(100, newWidth))
  
  progress.style.width = `${newWidth}%`

  const newTime = (newWidth / 100) * duration
  currentTime = Math.floor(newTime)

  const minutes = Math.floor(currentTime / 60)
  const seconds = currentTime % 60
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  timerElement.textContent = formattedTime
  audioPlayer.currentTime = currentTime
}

//CENTRAL PLAYER BTN REPEATER & SHUFFLE
const shuffle = document.getElementById("shuffle");
let isGreen = false;

function shuffleBtn() {
  if (!isGreen) {
    shuffle.style.fill = "#1db954";
    shuffle.style.borderBottom = "1px solid #1db954"
    isGreen = true;
  } else {
    shuffle.style.fill = "";
    shuffle.style.borderBottom = ""
    isGreen = false;
  }
}

shuffle.addEventListener('click', shuffleBtn);


const repeater = document.getElementById("repeater");
let clickCount = 0;

function repeaterBtn() {
  clickCount++;
  
  if (clickCount === 1) {
    repeater.style.fill = "#1db954";
    repeater.style.borderBottom = "1px solid #1db954"
  } else if (clickCount === 2) {
    repeater.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1db954" class="bi bi-repeat-1" viewBox="0 0 16 16">
    <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
    <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
  </svg>`


    repeater.appendChild(number);
  } else if (clickCount === 3) {
    repeater.style.fill = ""; 
    repeater.style.borderBottom = ""
    const number = repeater.querySelector("p");
    repeater.innerHTML = `<svg id="repeater" xmlns="http://www.w3.org/2000/svg"  fill="white" class="bi bi-repeat" viewBox="0 0 16 16">
    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
  </svg>`
    if (number) {
      repeater.removeChild(number);
    }
    clickCount = 0;
  }
}

repeater.addEventListener('click', repeaterBtn);




//RIGHT VOLUME PROGRESS BAR
let rightProgress; 

document.addEventListener("DOMContentLoaded", function() {
  const rightProgressContainer = document.querySelector('.rightDiv .progress-bar')
  rightProgress = document.querySelector('.rightDiv #progress')

  const randomWidth = Math.floor(Math.random() * 51) + 20
  rightProgress.style.width = `${randomWidth}%`
  audioPlayer.volume = randomWidth/100

  let isRightDragging = false;

  rightProgressContainer.addEventListener('mousedown', (e) => {
    isRightDragging = true;
    updateRightProgress(e);
    volumeUp.style.display = 'block'
    volumeMute.style.display = 'none'
  });

  document.addEventListener('mousemove', (e) => {
    if (isRightDragging) {
      updateRightProgress(e);
    }
  });

  document.addEventListener('mouseup', () => {
    isRightDragging = false;
  });

  function updateRightProgress(event) {
    const rightRect = rightProgressContainer.getBoundingClientRect()
    const rightOffsetX = event.clientX - rightRect.left
    const rightContainerWidth = rightRect.width
  
    let newRightWidth = (rightOffsetX / rightContainerWidth) * 100
    newRightWidth = Math.max(0, Math.min(100, newRightWidth))
  
    rightProgress.style.width = `${newRightWidth}%`
  
    const newVolume = newRightWidth / 100
    audioPlayer.volume = newVolume
  }
});

//RIGHT VOLUME BAR BUTTON
const volumeUp = document.getElementById("volume-up")
const volumeMute = document.getElementById("volume-mute")

function VolumeUpBtn() {
  volumeUp.style.display = 'none'
  volumeMute.style.display = 'block'
  rightProgress.style.width = "0%"
  audioPlayer.volume = 0
}

function VolumeMuteBtn() {
  volumeUp.style.display = 'block'
  volumeMute.style.display = 'none'
  rightProgress.style.width = '10%'
  audioPlayer.volume = 0.1
}

volumeUp.addEventListener('click', VolumeUpBtn)
volumeMute.addEventListener('click', VolumeMuteBtn)


//TODO: API PLAYER ALMOST DONE (CREDO)

/* async function fetchData() {
  try {
      let trackId = '1109739';
      const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`;

      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'e851cdc811mshe7e16f349b95bfep185932jsn67fb1834f7cb',
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error(error);
  }
}

fetchData();


let playerTrackImg = document.getElementById("playerTrackImg")
let playerSongName = document.getElementById("playerSongName")
let playerArtistName = document.getElementById("playerArtistName")
let player1 = document.querySelectorAll("#player1")

function startSong(){
    isPlaying = false
    playerTrackImg.src = data.artist.picture_small
    playerSongName.innerHTML = data.title
    playerArtistName.innerHTML = data.artist.name
    duration = data.duration
}

player1.addEventListener('click', resetTimer);
player1.addEventListener('click', startSong); */
  