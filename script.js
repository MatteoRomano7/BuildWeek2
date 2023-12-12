const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a605a3896bmsh1507f4a8a062864p1562ecjsn9f02d02f8e99",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetchApi(url, options);

async function fetchApi(url, option) {
  try {
    const response = await fetch(url, option);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert("Errore nel caricamento");
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
