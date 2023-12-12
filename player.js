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

heart.addEventListener('click', heartBtn); // Rimuovi le parentesi qui
heartFill.addEventListener('click', heartFillBtn); // Rimuovi le parentesi qui



//CENTRAL PLAYER
const progressElement = document.getElementById('progress')
const timerElement = document.querySelector('.timer')
const durationElement = document.querySelector('.duration')
const playIcon = document.getElementById('play-icon')
const stopIcon = document.getElementById('stop-icon')

let currentTime = 0
const duration = 20 //DURATION DEL TIMER IN SECONDS
let isPlaying = false //FALSE PER FARLO INZIARE DA SUBITO TRUE PER L INVERSO
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
    clearInterval(interval);
    isPlaying = false;
    playIcon.style.display = 'block'
    stopIcon.style.display = 'none'
  }
}

function togglePlayback() {
  if (isPlaying) {
    clearInterval(interval)
    isPlaying = false
    playIcon.style.display = 'block'
    stopIcon.style.display = 'none'
  } else {
    interval = setInterval(advanceProgressBar, 1000)
    isPlaying = true
    playIcon.style.display = 'none'
    stopIcon.style.display = 'block'
  }
}

togglePlayback()

playIcon.addEventListener('click', togglePlayback)
stopIcon.addEventListener('click', togglePlayback)

const backBtn = document.getElementById('backbtn');

function resetTimer() {
  currentTime = 0;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timerElement.textContent = formattedTime;
  progress.style.width = "0%";
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
}


//RIGHT VOLUME PROGRESS BAR
let rightProgress; 

document.addEventListener("DOMContentLoaded", function() {
  const rightProgressContainer = document.querySelector('.rightDiv .progress-bar');
  rightProgress = document.querySelector('.rightDiv #progress');

  const randomWidth = Math.floor(Math.random() * 101);
  rightProgress.style.width = `${randomWidth}%`;

  let isRightDragging = false;

  rightProgressContainer.addEventListener('mousedown', (e) => {
    isRightDragging = true;
    updateRightProgress(e);
    volumeUp.style.display = 'block';
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
    const rightRect = rightProgressContainer.getBoundingClientRect();
    const rightOffsetX = event.clientX - rightRect.left;
    const rightContainerWidth = rightRect.width;

    let newRightWidth = (rightOffsetX / rightContainerWidth) * 100;
    newRightWidth = Math.max(0, Math.min(100, newRightWidth));

    rightProgress.style.width = `${newRightWidth}%`;
  }
});

//RIGHT VOLUME BAR BUTTON
const volumeUp = document.getElementById("volume-up");
const volumeMute = document.getElementById("volume-mute");

function VolumeUpBtn() {
  volumeUp.style.display = 'none';
  volumeMute.style.display = 'block';
  rightProgress.style.width = "0%";
}

function VolumeMuteBtn() {
  volumeUp.style.display = 'block';
  volumeMute.style.display = 'none';
  rightProgress.style.width = '10%';
}

volumeUp.addEventListener('click', VolumeUpBtn);
volumeMute.addEventListener('click', VolumeMuteBtn);
