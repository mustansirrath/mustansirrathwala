const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close");
const themeWhite = document.getElementById('theme-white')
const ul = document.getElementById("links");

openBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
// themeWhite.addEventListener('click', () => {
//   document.body.classList.add('bg-change-white')
//   document.body.classList.remove('bg-change-black')
//   themeWhite.classList.add('fa-regular fa-moon')
//   themeWhite.classList.remove('fa-regular fa-sun')
// })

function showMenu() {
  ul.classList.add("active");
}

function hideMenu() {
  ul.classList.remove("active");
}
