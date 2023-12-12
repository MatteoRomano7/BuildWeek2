//Dropdown Header
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdownMenu");

let isDropdownVisible = "hidden";

dropdown.addEventListener("click", () => {
  if (isDropdownVisible === "hidden") {
    dropdownMenu.classList.add("show");
    isDropdownVisible = "visible";
  } else {
    dropdownMenu.classList.remove("show");
    isDropdownVisible = "hidden";
  }
});

//Background Image Fade
document.addEventListener("DOMContentLoaded", function () {
  let artistHeader = document.getElementById("artistHeader");
  let content = document.getElementById("content");

  let scrollPos = 0;

  document.addEventListener("scroll", function () {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > scrollPos) {
      // Scrolling verso il basso
      artistHeader.style.opacity =
        1 - scrollTop / (artistHeader.offsetHeight / 2);
    } else {
      // Scrolling verso l'alto
      artistHeader.style.opacity = Math.max(
        0,
        1 - scrollTop / (artistHeader.offsetHeight / 2)
      );
    }

    scrollPos = scrollTop;
  });
});
