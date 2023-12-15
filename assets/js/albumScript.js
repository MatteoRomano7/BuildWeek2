/*GESTIONE TESTI OVERFLOW*/

//FETCH
const urlId = new URLSearchParams(location.search)
const idValue = urlId.get('id');
const urlArtista = 'https://deezerdevs-deezer.p.rapidapi.com/track/' + idValue

//HEADER ALBUM PAGE
const fotoAlbum = document.querySelector('#fotoAlbum')
const titoloAlbum = document.querySelector('#titoloAlbum')
const iconaArtista = document.querySelector('.iconaArtista')
const artistName = document.querySelector('.artistName')
const annoUscita = document.querySelector('.annoUscita')
const minutaggioAlbum = document.querySelector('.minutaggioAlbum')
const cifraTotaleBrani = document.querySelector('.cifraTotaleBrani')

//CREAZIONE CARDS TRACK
const elencoBrani = document.querySelector('#elencoBrani')

//CREAZIONE CARDS SUGGERTIMENTI
const artista = document.querySelector('.moreOfArtist')
const artistDiscografy = document.querySelector('.artistDiscografy')
const altriAlbum = document.querySelector('#altriAlbum')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
}

fetchAlbumArtista(urlArtista, options)

async function fetchAlbumArtista(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)

    fetchBraniArtista(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${data.album.title}`, options)
    altriAlbumFetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${data.artist.name}`, options)

    fotoAlbum.innerHTML = `<img src="${data.album.cover_medium}" alt="${data.album.title}">`
    titoloAlbum.textContent = `${data.album.title}`
    iconaArtista.innerHTML = `<img src="${data.artist.picture_small}" alt="${data.artist.name}">`
    artistName.textContent = `${data.artist.name}`
    artistName.href = `artistPage.html?id=${data.artist.id}`
    annoUscita.textContent = `${data.album.release_date}`
    
    artista.innerHTML = `<a href="artistPage.html?id=${data.artist.id}">Altro di ${data.artist.name}</a>`
    artistDiscografy.innerHTML = `<a href="artistPage.html?id=${data.artist.id}"><small>Vedi discografia</small></a>`
}

async function fetchBraniArtista(url,option) {
    const response = await fetch(url, option)
    const dataDaEstrapolare = await response.json()
    const data = dataDaEstrapolare.data
    let numRandom = 10 + Math.floor(Math.random() * 13)
    const dataSliced = data.slice(0, numRandom)
    console.log(dataSliced)

    let albumDuration = 0
    for (let i = 0; i < dataSliced.length; i++) {
        albumDuration += dataSliced[i].duration
    }
    durationMinutes = Math.floor(albumDuration / 60)
    durationSeconds = albumDuration % 60
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
    }
    const duration = durationMinutes + ' min ' + durationSeconds + ' sec '
    minutaggioAlbum.textContent = duration

    let cards = ''
    for (let i = 0; i < dataSliced.length; i++) {
        let indiceTrack = i + 1
        let trackSeconds = dataSliced[i].duration % 60
        if (trackSeconds < 10) {
            trackSeconds = "0" + trackSeconds;
        }
        let trackDuration = Math.floor(dataSliced[i].duration / 60) + ':' + trackSeconds
        let numRiproduzioniCasuali = Math.floor(Math.random() * 1000000)
        cards += `
            <div class="row">
                <div class="numBrano">
                    <p>${indiceTrack}</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path
                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg></span>
                </div>
                <div class="titoloBrano">
                <div class="toolText"><h4>${dataSliced[i].title_short}</h4></div>
                    <span class="artista"><a href="artistPage.html?id=${dataSliced[i].artist.id}">${dataSliced[i].artist.name}</a></span>
                </div>
                <div class="nRiproduzioni">${numRiproduzioniCasuali}</div>
                <div class="tempoBrano">
                    ${trackDuration}
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-heart-fill unfilledHeart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    </span>
                    <strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                    </strong>
                </div>
                <div class="dotOption">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                </div>
            </div>
        `
    }
    elencoBrani.innerHTML = cards

    const h4Elements = document.querySelectorAll('h4');
    console.log(h4Elements)

    h4Elements.forEach(function (h4) {
        if (h4.scrollWidth > h4.clientWidth) {
            h4.classList.add('overflowing');
        }
    });

    const unfilledHearts = document.querySelectorAll('.unfilledHeart')
    console.log(unfilledHearts)

    for (let i = 0; i < unfilledHearts.length; i++) {
        let isHeartFilled = 'none'
        unfilledHearts[i].addEventListener('click', () => {
            if (isHeartFilled === 'none') {
                unfilledHearts[i].style.fill = '#1ed760'
                isHeartFilled = 'filled'
            } else {
                unfilledHearts[i].style.fill = 'currentColor'
                isHeartFilled = 'none'
            }
        })
    }

}

async function altriAlbumFetch(url, option) {
    const response = await fetch(url, option)
    const dataDaEstrapolare = await response.json()
    const data = dataDaEstrapolare.data
    console.log(data)
    
    let cardsBot = ''
    for (let i = 0; i < 5; i++) {
        cardsBot += `
            <div class="cardAlbum">
                    <div class="topCard">
                    <img src="${data[i].album.cover_big}" alt="${data[i].title}">
                    <div class="cardBtn">
                        <button type="button" id="player1" class="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path
                                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="toolText"><h4><a href="artistPage.html?id=${data[i].artist.id}">${data[i].artist.name}</a></h4></div>
            </div>
        `
    }
    altriAlbum.innerHTML = cardsBot
    const h4Elements = document.querySelectorAll('h4');

    console.log(h4Elements)

    h4Elements.forEach(function (h4) {
        if (h4.scrollWidth > h4.clientWidth) {
            h4.classList.add('overflowing');
        }
    });
}


const backwardsMobile = document.querySelector('.backwardsMobile')
backwardsMobile.addEventListener('click', () => history.back())