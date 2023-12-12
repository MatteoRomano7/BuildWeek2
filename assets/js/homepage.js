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

fetchApi(urlPlaylist ,options)
showSongs(urlEminem,options)

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

// DROPDOWN JS

const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdownMenu')

let isDropdownVisible = 'hidden'

dropdown.addEventListener('click', () => {
    if (isDropdownVisible === 'hidden') {
        dropdownMenu.classList.add('show')
        isDropdownVisible = 'visible'
    } else {
        dropdownMenu.classList.remove('show')
        isDropdownVisible = 'hidden'
    }
})

document.addEventListener('click', (event) => {
    const isClickInsideDrowdown = dropdown.contains(event.target);

    if (!isClickInsideDrowdown) {
        dropdownMenu.classList.remove('show')
        isDropdownVisible = 'hidden'
    }
})