const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("change", () => {
  document.body.classList.toggler("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggler("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggler("active");
});
