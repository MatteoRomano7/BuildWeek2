function toggleSidebar() {
  let sidebar = document.querySelector(".activitySection.sidebar");
  sidebar.classList.toggle("minimized");
}

var minimizeIcon = document.querySelector(".bi-x-lg");
minimizeIcon.addEventListener("click", toggleSidebar);
