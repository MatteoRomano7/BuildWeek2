

/*HEADER TOP*/
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