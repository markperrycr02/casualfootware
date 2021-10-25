const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    closeSubMenus();
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

toggle.addEventListener("click", toggleMenu, false);

// Sunbemus
const items = document.querySelectorAll(".item");

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else {
    closeSubMenus();
    this.classList.add("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}

/* Helper functions */

function closeSubMenus() {
  if (menu.querySelector(".submenu-active"))
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
}

/* Close submenu from anywhere in the page */

function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

document.addEventListener("click", closeSubmenu, false);
