// Show the loader when the page starts loading
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.loader').style.display = 'block';
});

// Hide the loader once the page content has loaded
window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'none';
});

document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    var vistaElements = document.getElementsByClassName("vista");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      for (var i = 0; i < vistaElements.length; i++) {
        vistaElements[i].classList.add("text-white");
      }
    } else {
      mobileMenu.classList.add("hidden");
      for (var i = 0; i < vistaElements.length; i++) {
        vistaElements[i].classList.remove("text-white");
      }
    }
  });

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("blurBg");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("blurBg");
    navbar.classList.add("bg-transparent");
  }
});
