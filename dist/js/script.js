$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".pageup ").fadeIn();
    } else {
      $(".pageup ").fadeOut();
    }
  });
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu");
  CloseElem = document.querySelector(".menu__close");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  CloseElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  const counters = document.querySelectorAll(".skkils__ratings-counter"),
    lines = document.querySelectorAll("skkils__ratings-line span");

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
});
