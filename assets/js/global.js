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

const buttonBack = document.querySelector('.backwardForwardBtns .backward')
buttonBack.addEventListener('click', () => history.back())

const buttonForward = document.querySelector('.backwardForwardBtns .forward')
buttonForward.addEventListener('click', () => history.forward())

document.addEventListener('DOMContentLoaded', function() {
    const expandWindow = document.querySelector('.bi-arrows-angle-expand');

    expandWindow.addEventListener('click', function() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && 
            !document.webkitFullscreenElement && 
            !document.msFullscreenElement) {
            const docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen()
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen()
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen()
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen()
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        }
    })
})