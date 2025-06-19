const openMenu = document.querySelector(".open-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  //   alert("hi");
});
