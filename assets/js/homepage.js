/* const urldkjsa = new URLSearchParams(location.search) */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
}
const urlPlaylist = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=playlist&index=25';
const urlEminem = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const cardsContainerTop = document.querySelector('.cardsContainerTop')
const cardsDesktop = document.querySelector('.cardsDesktop')
const cardsContainerMobile = document.querySelector('.cardsContainerMobile')
const headerMid = document.querySelector('.headerMid')
const headerBot = document.querySelector('.headerBot')
const showAnnunci = document.querySelector('.showAnnunci')
const hideAnnunci = document.querySelector('.hideAnnunci')
const audioElem = document.querySelector('audio')
const headerPlay = document.querySelector(".headerPlay")

let playerInfo = document.querySelector(".leftDiv")



hideAnnunci.addEventListener('click', () => {
    headerMid.style.display = 'block'
    headerBot.style.display = 'none'
})

showAnnunci.addEventListener('click', () => {
    headerMid.style.display = 'none'
    headerBot.style.display = 'flex'
})


async function fetchApi(url, option) {
  const response = await fetch(url, option);
  const data = await response.json();
  const array = data.data;
  console.log(data);

  let cardsTop = "";
  for (let i = 0; i < 6; i++) {
    cardsTop += `
        <div class="cardTop">
            <a href="album.html?id=${array[i].id}">
                <img src="${array[i].album.cover_medium}" alt="albumLogo">
            </a>
            <div class="cardTopText">
                <a href="album.html?id=${array[i].id}">
                    <p>${array[i].album.title}</p>
                </a>
            </div>
            <button type="button" id="player1" class="btn cardTopPlayer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
         </button>
         <p class="cardId">${array[i].id}</p>

        </div>
        `
  }
  cardsContainerTop.innerHTML = cardsTop;

  const ArrayCardsTop = document.querySelectorAll(".cardTop");
  const btnsPlayer1 = document.querySelectorAll(".cardTopPlayer");

  for (let i = 0; i < ArrayCardsTop.length; i++) {
    ArrayCardsTop[i].addEventListener("mouseover", () => {
      btnsPlayer1[i].classList.add("show");
    });
    ArrayCardsTop[i].addEventListener("mouseout", () => {
      btnsPlayer1[i].classList.remove("show");
    });
  }
}

async function showSongs(url, option) {
  const response = await fetch(url, option);
  const data = await response.json();
  const array = data.data;
  console.log(array)

  let cardsCategoryDesktop = "";
  for (let i = 0; i < 5; i++) {
    cardsCategoryDesktop += createContainer(array[i].artist.name);
  }
  cardsDesktop.innerHTML = cardsCategoryDesktop;

  const cardsContainerBot = document.querySelectorAll(".cardsContainerBot");

  let container0 = "";
  for (let i = 0; i < 5; i++) {
    container0 += createCardDesktop(
      array[i].album.cover_medium,
      array[i].title,
      array[i].album.title,
      array[i].id
    );
  }
  cardsContainerBot[0].innerHTML = container0;

  let container1 = "";
  for (let i = 5; i < 10; i++) {
    container1 += createCardDesktop(
      array[i].album.cover_medium,
      array[i].title,
      array[i].album.title,
      array[i].id
    );
  }
  cardsContainerBot[1].innerHTML = container1;

  let container2 = "";
  for (let i = 10; i < 15; i++) {
    container2 += createCardDesktop(
      array[i].album.cover_medium,
      array[i].title,
      array[i].album.title,
      array[i].id
    );
  }
  cardsContainerBot[2].innerHTML = container2;

  let container3 = "";
  for (let i = 15; i < 20; i++) {
    container3 += createCardDesktop(
      array[i].album.cover_medium,
      array[i].title,
      array[i].album.title,
      array[i].id
    );
  }
  cardsContainerBot[3].innerHTML = container3;

  let container4 = "";
  for (let i = 20; i < 25; i++) {
    container4 += createCardDesktop(
      array[i].album.cover_medium,
      array[i].title,
      array[i].album.title,
      array[i].id
    );
  }
  cardsContainerBot[4].innerHTML = container4;

  let cardsMobile = "";
  for (let i = 0; i < 10; i++) {
    cardsMobile += createMobileCards(array[i]);
  }
  cardsContainerMobile.innerHTML = cardsMobile;

  const cardsBot = document.querySelectorAll(".cardBot");
  const btnsPlayer1 = document.querySelectorAll(".cardBotPlayer");

  for (let i = 0; i < cardsBot.length; i++) {
    cardsBot[i].addEventListener("mouseover", () => {
      btnsPlayer1[i].classList.add("show");
    });
    cardsBot[i].addEventListener("mouseout", () => {
      btnsPlayer1[i].classList.remove("show");
    });
  }

  const cardMobileHearts = document.querySelectorAll(".cardMobileHeart");

  for (let i = 0; i < cardMobileHearts.length; i++) {
    let isHeartFilled = "none";
    cardMobileHearts[i].addEventListener("click", () => {
      if (isHeartFilled === "none") {
        cardMobileHearts[i].style.fill = "#1ed760";
        isHeartFilled = "filled";
      } else {
        cardMobileHearts[i].style.fill = "gray";
        isHeartFilled = "none";
      }
    });
  }

 
  const playButtons = document.querySelectorAll("#player1");
  for (i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener("click", function () {
      let songId = this.nextElementSibling.innerText;
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${songId}`, options)
        .then((response) => response.json())
        .then((data) => {
            clearInterval(interval)
            
            audioElem.setAttribute('src', data.preview)
            isPlaying = false
            togglePlayback()
            advanceProgressBar()
            resetTimer()
            // console.log(interval)

            playerApi(data)
            console.log(data)
            
        });
    });
  }

}

function playerApi(results){
  const leftDivSongImg = playerInfo.querySelector("img")
  const LeftDivArtistName =  playerInfo.querySelector("h4")
  const LeftDivTrackName =  playerInfo.querySelector("h2")

  leftDivSongImg.src = results.album.cover
  LeftDivArtistName.innerHTML = results.artist.name
  LeftDivTrackName.innerHTML = results.title

  }
  
 
function testShit() {
}

function createMobileCards(card) {
  return `
            <div class="cardMobile">
                <div class="cardTopMobile">
                    <a href="album.html?id=${card.id}">
                        <img src="${card.album.cover_medium}">
                    </a>
                    <div class="cardTopTextMobile">
                        <a href="album.html?id=${card.id}">
                            <p>${card.title}</p>
                            <p>${card.title} from ${card.album.title}</p>
                        </a>
                    </div>
                </div>
                <div class="cardBotMobile">
                    <div class="cardBotMobileLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-heart-fill cardMobileHeart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                    </div>
                    <div class="cardBotMobileRight">
                        <p>${card.type}</p>
                        <div>
                        <button type="button" id="player1" class="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        </button>
                        <p class="cardId">${card.id}</p>

                        </div>
                    </div>
                </div>
            </div>
        `;
}

function createContainer(categoryName) {
  return `
        <div class="otherAlbums">
            <h3>${categoryName}</h3>
            <p>VISUALIZZA TUTTO</p>
        </div>
        <div class="cardsContainerBot">
            
        </div>
    `;
}

function createCardDesktop(songImg, songTitle, songAlbum, trackId) {
  return `
        <div class="cardBot">
            <div class="cardBotImgBtn">
            <a href="album.html?id=${trackId}">
                <img class="cardBotImg" src="${songImg}" alt="playlistAlbumImage">
            </a>
                <button type="button" id="player1" class="btn cardBotPlayer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
                <p class="cardId">${trackId}</p>
            </div>
            <a href="album.html?id=${trackId}">
                <p class="cardBotTitle">${songTitle}</p>
                <p class="cardBotDesc">${songTitle} from Album: ${songAlbum}</p>
            </a>
        </div>
    `;
}

fetchApi(urlPlaylist ,options)
showSongs(urlEminem,options)

let suggestedSongId = 1963530567

function defaultSong(){

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${suggestedSongId}`, options)
.then((response) => response.json())
.then((datas)  => {
  
  clearInterval(interval)
  playerApi(datas)
  audioElem.src = datas.preview
  isPlaying = false
  togglePlayback()
  advanceProgressBar()
  resetTimer()

})
}

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${suggestedSongId}`, options)
.then((response) => response.json())
.then((datas)  => {
  
  
  playerApi(datas)
  audioElem.src = datas.preview
  
})

headerPlay.addEventListener("click", function() {
  defaultSong()

})

  
