import inventoryAPI from "../apis/inventoryAPI";

export const navClick = (e) => {
  console.log(e);
  e.target.classList.toggle("open");
  const mobileNav = document.querySelector(".mobile-nav-container");
  const menuBtn = document.querySelector(".menu-btn");
  const menuBtnClose = document.querySelector(".menu-btn-close");
  mobileNav.classList.toggle("opacity-100");
  mobileNav.classList.toggle("-z-50");
  mobileNav.classList.toggle("opacity-0");
  mobileNav.classList.toggle("bg-slate-100");
  menuBtn.classList.toggle("opacity-0");
  menuBtn.classList.toggle("-z-50");
  menuBtnClose.classList.toggle("opacity-0");
  menuBtnClose.classList.toggle("opacity-100");
  menuBtnClose.classList.toggle("z-50");
  menuBtnClose.classList.toggle("-z-50");
};