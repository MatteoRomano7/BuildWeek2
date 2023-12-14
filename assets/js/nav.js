import { playlists } from "../js/playlists.js";

function pass() {
  return;
}

function generatePlaylists() {
  const playlistBox = document.querySelector(".auto-playlists");
  for (let i = 0; i < 60; i++) {
    let playlist = playlists[random(7100)];

    playlistBox.innerHTML += `
    
    <div><li><a href="https://open.spotify.com/search/${playlist}" target="blank" title="${playlist}">${playlist}</a></li></div>
    `;
  }
}

function dots() {
  const playlistLinks = document.querySelectorAll(".auto-playlists a");
  for (let elem of playlistLinks) {
    if (elem.scrollWidth > 270) {
      const dot = document.createElement("svg");
      dot.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </svg>`;
    elem.addEventListener('mouseover', () => {
      dot.classList.toggle('playlist-dots-vanish')
    })
    elem.addEventListener('mouseleave', () => {
      dot.classList.toggle('playlist-dots-vanish')
    })

    elem.classList.add('playlist-hover')
    elem.parentElement.after(dot)
    }
  }
}

function random(n) {
  return Math.round(Math.random() * n) + 1;
}


generatePlaylists();
dots();
