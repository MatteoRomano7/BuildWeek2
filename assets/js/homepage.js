const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
const urlPlaylist = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=playlist&index=25';
const urlEminem = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const cardsContainerTop = document.querySelector('.cardsContainerTop')
const cardsDesktop = document.querySelector('.cardsDesktop')
const cardsContainerMobile = document.querySelector('.cardsContainerMobile')


async function fetchApi(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    const array = data.data
    console.log(data)

    let cardsTop = ''
    for (let i = 0; i < 6; i++) {
        cardsTop += `
        <div class="cardTop">
            <img src="${array[i].album.cover_medium}" alt="albumLogo">
            <div class="cardTopText">
                <p>${array[i].album.title}</p>
            </div>
        </div>
        `
    }
    cardsContainerTop.innerHTML = cardsTop
}

async function showSongs(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    const array = data.data

    let cardsCategoryDesktop = ''
    for (let i = 0; i < 5; i++) {
       cardsCategoryDesktop += createContainer(array[i].artist.name)
    }
    cardsDesktop.innerHTML = cardsCategoryDesktop

    const cardsContainerBot = document.querySelectorAll('.cardsContainerBot')

    let container0 = ''
    for (let i = 0; i < 5; i++) {
        container0 += createCardDesktop(array[i].album.cover_medium, array[i].title, array[i].album.title)
    }
    cardsContainerBot[0].innerHTML = container0

    let container1 = ''
    for (let i = 5; i < 10; i++) {
        container1 += createCardDesktop(array[i].album.cover_medium, array[i].title, array[i].album.title)
    }
    cardsContainerBot[1].innerHTML = container1

    let container2 = ''
    for (let i = 10; i < 15; i++) {
        container2 += createCardDesktop(array[i].album.cover_medium, array[i].title, array[i].album.title)
    }
    cardsContainerBot[2].innerHTML = container2

    let container3 = ''
    for (let i = 15; i < 20; i++) {
        container3 += createCardDesktop(array[i].album.cover_medium, array[i].title, array[i].album.title)
    }
    cardsContainerBot[3].innerHTML = container3
    let container4 = ''
    for (let i = 20; i < 25; i++) {
        container4 += createCardDesktop(array[i].album.cover_medium, array[i].title, array[i].album.title)
    }
    cardsContainerBot[4].innerHTML = container4

    let cardsMobile = ''
    for (let i = 0; i < 10; i++) {
        cardsMobile += createMobileCards(array[i])
    }
    cardsContainerMobile.innerHTML = cardsMobile
}


function createMobileCards (card) {
    return `
            <div class="cardMobile">
                <div class="cardTopMobile">
                    <img src="${card.album.cover_medium}">
                    <div class="cardTopTextMobile">
                        <p>${card.title}</p>
                        <p>${card.title} from ${card.album.title}</p>
                    </div>
                </div>
                <div class="cardBotMobile">
                    <div class="cardBotMobileLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#19D95F" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                    </div>
                    <div class="cardBotMobileRight">
                        <p>${card.type}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill cardBotPlay" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `
}

function createContainer(categoryName) {
    return `
        <div class="otherAlbums">
            <h3>${categoryName}</h3>
            <p>VISUALIZZA TUTTO</p>
        </div>
        <div class="cardsContainerBot">
            
        </div>
    `
}

function createCardDesktop(songImg, songTitle, songAlbum) {
    return `
    <div class="cardBot">
        <img class="cardBotImg" src="${songImg}" alt="playlistAlbumImage">
        <p class="cardBotTitle">${songTitle}</p>
        <p class="cardBotDesc">${songTitle} from Album: ${songAlbum}</p>
    </div>
    `
}

fetchApi(urlPlaylist ,options)
showSongs(urlEminem,options)
