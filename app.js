const filterButtonUl = document.querySelector(".filter__button__ul");

filterButtonUl.addEventListener("click", function (event) {
  const buttons = filterButtonUl.querySelectorAll(".filter__button");
  const clickedButton = event.target;

  buttons.forEach(function (button) {
    if (button === clickedButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});
