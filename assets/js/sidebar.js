const minimizeFriends = document.querySelector(".bi-x-lg");
const friends = document.querySelector("#friends");
const activityItems = document.querySelectorAll(".activityItem");
const openFriends = document.querySelector(".openFriends");

function closeFriendsSide() {
  let sidebar = document.querySelector(".activitySection");
  sidebar.style.minWidth = "50px";
  sidebar.style.maxWidth = "50px";
  friends.style.display = "none";
  openFriends.style.display = "block";

  activityItems.forEach((content) => {
    content.style.display = "none";
  });
}

function openFriendsSide() {
  let sidebar = document.querySelector(".activitySection");
  sidebar.style.minWidth = "250px";
  sidebar.style.maxWidth = "250px";
  friends.style.display = "flex";
  openFriends.style.display = "none";

  activityItems.forEach((content) => {
    setTimeout(() => {
      content.style.display = "flex";
    }, 150);
  });
}
openFriends.addEventListener("click", openFriendsSide);
minimizeFriends.addEventListener("click", closeFriendsSide);
