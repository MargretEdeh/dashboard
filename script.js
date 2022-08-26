const navToggle = document.querySelector(".nav-bar")
const link = document.querySelector(".links")

navToggle.addEventListener("click", function() {

  link.classList.toggle("show-links")
})