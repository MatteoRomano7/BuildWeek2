//GENERIC
const urlId = new URLSearchParams(location.search)
const idValue = urlId.get('id');
const urlArtista = 'https://deezerdevs-deezer.p.rapidapi.com/artist/' + idValue
const urlSearch = 'https://deezerdevs-deezer.p.rapidapi.com/search?q='
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
}

//HEADER
const headerBotImg = document.querySelector('.headerBotImg')
const artistName = document.querySelector('.artistName') 
const monthlyListener = document.querySelector('.monthlyListener')
const monthlyListenerMobile = document.querySelector('.monthlyListenerMobile')

//MAIN
const followingBtn = document.querySelector('.followingBtn')
const shuffleIcon = document.querySelector('.shuffleIcon')
const seguitiBtn = document.querySelector('.seguitiBtn')

//CARDS
const trackCardsContainer = document.querySelector('.trackCardsContainer')
const trackImg = document.querySelector('.trackImg')
const trackTitle = document.querySelector('.trackTitle')
const trackListeners = document.querySelector('.trackListeners')

//LIKED SONGS
const likedSongsNumber = document.querySelector('.likedSongsNumber')
const artistImgMedium = document.querySelector('.artistImgMedium')
const artistImgSmall = document.querySelector('.artistImgSmall')
const likedSongsDesktopArtistName = document.querySelector('.likedSongsDesktopArtistName')
const likedSongsMobileNumber = document.querySelector('.likedSongsMobileNumber')
const likedSongsMobileArtist = document.querySelector('.likedSongsMobileArtist')

fetchArtist(urlArtista, options)

let isFollowingBtnOn = 'off'

followingBtn.addEventListener('click', () => {
    if (isFollowingBtnOn === 'off') {
        seguitiBtn.style.backgroundColor = '#3d91f4'
        followingBtn.style.backgroundColor = '#3d91f4'
        followingBtn.innerHTML = 'FOLLOWING'
        isFollowingBtnOn = 'on'
    } else {
        seguitiBtn.style.backgroundColor = 'rgba(255,255,255,0)'
        followingBtn.style.backgroundColor = 'rgba(255,255,255,0)'
        followingBtn.innerHTML = 'FOLLOW'
        isFollowingBtnOn = 'off'
    }
})

seguitiBtn.addEventListener('click', () => {
    if (isFollowingBtnOn === 'off') {
        seguitiBtn.style.backgroundColor = '#3d91f4'
        followingBtn.style.backgroundColor = '#3d91f4'
        followingBtn.innerHTML = 'FOLLOWING'
        isFollowingBtnOn = 'on'
    } else {
        seguitiBtn.style.backgroundColor = 'rgba(255,255,255,0)'
        followingBtn.style.backgroundColor = 'rgba(255,255,255,0)'
        followingBtn.innerHTML = 'FOLLOW'
        isFollowingBtnOn = 'off'
    }
})

let isShuffleOn = 'off'

shuffleIcon.addEventListener('click', () => {
    if (isShuffleOn === 'off') {
        shuffleIcon.style.fill = '#1ed760'
        isShuffleOn = 'on'
    } else {
        shuffleIcon.style.fill = 'currentColor'
        isShuffleOn = 'off'
    }
})

async function fetchArtist(url,option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)

    headerBotImg.innerHTML = `<img src="${data.picture_xl}" alt="backgroundImg">`
    artistName.textContent = data.name
    monthlyListener.textContent = data.nb_fan + ' ascoltatori mensili'
    monthlyListenerMobile.textContent = data.nb_fan + ' ascoltatori mensili'
    artistImgMedium.src = data.picture_medium
    artistImgSmall.src = data.picture_medium
    likedSongsDesktopArtistName.innerHTML = data.name
    likedSongsMobileArtist.innerHTML = data.name

    fetchTracks(urlSearch + data.name, options)
}

async function fetchTracks(url,option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)

    let cards = ''
    for (let i = 0; i < 10; i++) {
        let randomListeners = Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 1000)
        let trackIndexNumber = i + 1
        cards += `
            <div class="trackCard">
                <div class="trackIndexDiv">
                    <p class="trackIndex">${trackIndexNumber}</p>
                </div>
                <p class="cardId">${data.data[i].id}</p>
                <div class="trackImgDiv">
                    <img class="trackImg" src="${data.data[i].album.cover_medium}" alt="trackImg">
                </div>
                <div class="trackTitleDiv">
                    <h3 class="trackTitle">${data.data[i].title}</h3>
                    <p class="trackListeners">${randomListeners}</p>
                    
                </div>
                <div class="trackMoreInfoDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg>
                </div>
            </div>
        `
    }
    trackCardsContainer.innerHTML = cards

    let randomLikedSongs = Math.floor(Math.random() * 15)
    likedSongsMobileNumber.innerHTML = randomLikedSongs
    likedSongsNumber.innerHTML = randomLikedSongs

    const trackCards = document.querySelectorAll('.trackCard')
    console.log(trackCards)
    const trackIndexes = document.querySelectorAll('.trackIndexDiv')
    console.log(trackIndexes)
    for (let i = 0; i < trackCards.length; i++) {
        trackCards[i].addEventListener('mouseover', () => {
                trackIndexes[i].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" id="player1" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
            `
        })
        let trackIndexNumber = i + 1
        trackCards[i].addEventListener('mouseout', () => {
            trackIndexes[i].innerHTML = `<p class="trackIndex">${trackIndexNumber}</p>`
        })
    }
}

const audioElem = document.querySelector('audio')

let playerInfo = document.querySelector(".leftDiv")

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

function playerApi(results){
    const leftDivSongImg = playerInfo.querySelector("img")
    const LeftDivArtistName =  playerInfo.querySelector("h4")
    const LeftDivTrackName =  playerInfo.querySelector("h2")
  
    leftDivSongImg.src = results.album.cover
    LeftDivArtistName.innerHTML = results.artist.name
    LeftDivTrackName.innerHTML = results.title
  
    }
   

    const backwardsMobile = document.querySelector('.backwardsMobile')
    backwardsMobile.addEventListener('click', () => history.back())