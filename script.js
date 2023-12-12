//PROGRESS BAR PLAYER
const progressElement = document.getElementById('progress');
const timerElement = document.querySelector('.timer');
const durationElement = document.querySelector('.duration');
let currentTime = 0; 
const duration = 20; // DURATION SONG IN SECONDS 

function advanceProgressBar() {
  currentTime += 1;
  if (currentTime <= duration) {
    const progressWidth = (currentTime / duration) * 100;
    progressElement.style.width = `${progressWidth}%`;

  
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
   
    timerElement.textContent = formattedTime;

   
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = duration % 60;
    const formattedDuration = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
   
    durationElement.textContent = formattedDuration;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(advanceProgressBar, 1000); // SET TIME FOR PROGREBARR ADVANCEMENT IN MS


