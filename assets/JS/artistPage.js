/* Fetch from Deezer API */
fetchApi();

async function fetchApi() {
  try {
    const artistID = `13`;
    const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a605a3896bmsh1507f4a8a062864p1562ecjsn9f02d02f8e99",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
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
let nameArtist = document.getElementById("imageArtist");
let songTitle = document.getElementById("songtitle");
let listenersArtist = document.getElementById("listenersArtist");
let trackList = document.getElementById("trackList");
let songTime = document.getElementById("songTime");

function apiArtist() {
  imageArtist.src = data.picture;
  nameArtist.innerHTML = data.name;
  listenersArtist.innerHTML = data.nb_fan;
  trackList.innerHTML = `<li class="flexList">
  <p class="number">1</p>
  <img src="${data.picture_small}" alt="albumcover" class="artCover">
  <h3 class="songTitle"></h3>
  <p class="streams"></p>
  <p class="songTime"></p>
</li>`;
}
