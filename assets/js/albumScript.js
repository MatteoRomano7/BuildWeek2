

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

/*GESTIONE TESTI OVERFLOW*/
// Seleziona tutti gli h4
const h4Elements = document.querySelectorAll('h4');

// Cicla attraverso gli h4
h4Elements.forEach(function (h4) {
    // Verifica se l'h4 ha un overflow
    if (h4.scrollWidth > h4.clientWidth) {
        // Applica la classe overflowing solo se c'è overflow
        h4.classList.add('overflowing');
    }
});