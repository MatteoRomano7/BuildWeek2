const endpoint = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b36f7f0e4msh713a7788113b5dfp1c91f9jsna6e735e2137f",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const container = document.querySelector(".placeholder-categories");
const searchForm = document.querySelector("form");
const searchBar = document.querySelector("input");
const showMoreContainer = document.querySelector(".show-more");
let index = 0

function removeAllElements() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

function searchResults(index = "") {
  const searchText = searchBar.value;

  fetch(`${endpoint}${searchText}${index}`, options)
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.data.length; i++) {
        let content = data.data[i];
        const card = document.createElement("div");
        card.classList.add("searchResultBox");
        card.innerHTML = `
            <div class="imgContainer">
                <img src="${content.album.cover}"></img>
            </div>
            <div class="searchText">
            <h3><a href="album.html?id=${content.album.id}">${content.title}</a></h3>
            <p><a href="artist.html=id=${content.artist.id}">${content.artist.name}</a><p>
            </div>
            `;
        container.appendChild(card);
      }
      index = 0
      console.log(data);
    });
}

const moreButton = showMoreContainer.querySelector("button");
moreButton.addEventListener("click", () => {
    index += 25
  searchResults(`&index=${index}`);
});
searchForm.addEventListener("submit", removeAllElements);
searchForm.addEventListener(
  "submit",
  () => (showMoreContainer.style.display = "block")
);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResults();
});
