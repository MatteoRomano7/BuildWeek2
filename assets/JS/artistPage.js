/* Fetch from Deezer API */
fetchApiID()
async function fetchApiID() {
  try {
    const artistID = "13";
    const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a605a3896bmsh1507f4a8a062864p1562ecjsn9f02d02f8e99",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    

    const response = await fetch(url, options);
    handleArtistData(result);
    apiArtistMobile(result);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  
}
fetchApi();

async function fetchApi() {
  try {
    const artist = "Eminem";
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a605a3896bmsh1507f4a8a062864p1562ecjsn9f02d02f8e99",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    apiArtist(data.data);
    apiArtist(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
 
}

//Dropdown Header
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdownMenu");

let isDropdownVisible = "hidden";

dropdown.addEventListener("click", () => {
  if (isDropdownVisible === "hidden") {
    dropdownMenu.classList.add("show");
    isDropdownVisible = "visible";
  } else {
    dropdownMenu.classList.remove("show");
    isDropdownVisible = "hidden";
  }
});

//Background Image Fade
document.addEventListener("DOMContentLoaded", function () {
  let artistHeader = document.getElementById("artistHeader");
  let content = document.getElementById("content");

  let scrollPos = 0;

  document.addEventListener("scroll", function () {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > scrollPos) {
      // Scrolling verso il basso
      artistHeader.style.opacity =
        1 - scrollTop / (artistHeader.offsetHeight / 2);
    } else {
      // Scrolling verso l'alto
      artistHeader.style.opacity = Math.max(
        0,
        1 - scrollTop / (artistHeader.offsetHeight / 2)
      );
    }

    scrollPos = scrollTop;
  });
});

let imageArtist = document.getElementById("imageArtist");
let nameArtist = document.getElementById("nameArtist");
let songTitle = document.getElementById("songtitle");
let listenersArtist = document.getElementById("listenersArtist");
let trackList = document.getElementById("trackList");
let songTime = document.getElementById("songTime");


function apiArtist(array) {
  
  for (let i = 0; i < 10  ; i++) {
    let trackDurationMinute = Math.floor(array[i].duration / 60);
    let trackDurationSeconds = array[i].duration - trackDurationMinute * 60;
    let trackDuration = `${trackDurationMinute}:${trackDurationSeconds < 10 ? '0' : ''}${trackDurationSeconds}`;
    trackList.innerHTML += `<li class="flexList">
      <p class="number">${i + 1}</p>
      <img src="${array[i].album.cover_medium}" alt="albumcover" class="artCover">
      <h3 class="songTitle">${array[i].title_short}</h3>
      <p class="streams">${array[i].rank}</p>
      <p class="songTime">${trackDuration}</p>
    </li>`;
  }
}



function handleArtistData(artistData) {
  nameArtist.innerHTML = artistData.name;
  imageArtist.src = artistData.picture_xl; 
  listenersArtist.innerHTML = `${artistData.nb_fan} Ascoltatori mensili`
}



//mobile
let imageArtistMobile = document.getElementById("imageArtistMobile")
let nameArtistMobile = document.getElementById("nameArtistMobile")
let likedTracksMobile = document.getElementById("likedTracksMobile")
let listenersArtistMobile = document.getElementById("listenersArtistMobile")
let cardMobile = document.getElementById("cardMobileID")


function apiArtistMobile(array, artistData) {
  imageArtistMobile.src = artistData.picture_xl; 
  nameArtistMobile.innerHTML = artistData.name
  
  for (let i = 0; i < 10; i++) {
    cardMobile.innerHTML += `
      <div class="numberMobile">
        <p>${i + 1}</p>
      </div>
      <div class="imageMobile">
        <img src="${array[i].album.cover_medium}" class="cardImageMobile" alt="">
      </div>
      <div class="titleMobile">
        <h3>${array[i].title_short}</h3>
        <p>${artistData.nb_fan}</p>
      </div>
      <div class="optionMobile">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
    `;
  }
}
