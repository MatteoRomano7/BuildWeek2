const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetchApi(url,options)

async function fetchApi(url, option) {
    try {
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    }
    catch (error) {
        console.log(error)
    }
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

dropdown.addEventListener('click', (event) => {
    event.stopPropagation();
});