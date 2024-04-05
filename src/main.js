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
