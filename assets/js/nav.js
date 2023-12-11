const endpoint = "https://deezerdevs-deezer.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b36f7f0e4msh713a7788113b5dfp1c91f9jsna6e735e2137f",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

function pass() {
  return
}

let counter = 0
while (counter <50) {
  generatePlaylists()

}


function generatePlaylists() {
  fetch(`${endpoint}playlist/${random(3000)}}`, options).then(response => response.json()).then(data => {
    try {
      if (data.error.code) {
        console.log('pepe')
        return
      }
    } catch (DataException){
      pass()
    }
    const playlistBox = document.querySelector('.auto-playlists')
    playlistBox.innerHTML += `
    <li><a href="#">${data.title}</a></li>
    `
    counter++
    console.log(counter)

  })
  }


function random(n) {
    return Math.round(Math.random() * n)
}

generatePlaylists()