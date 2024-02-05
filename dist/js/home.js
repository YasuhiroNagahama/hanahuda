function clickMenuButton() {
  const menuButton = document.querySelector(".hamburger-menu-bars-wrapper");
  menuButton.addEventListener("click", () => {
    const menu = document.querySelector(".hamburger-menu-buttons-wrapper");
    menu.classList.toggle("is-active");
  });
}

clickMenuButton();
