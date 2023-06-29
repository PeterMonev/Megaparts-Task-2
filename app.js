// HEADER MENU BUTTON

const mobileMenuButton = document.querySelector(".mobile__menu");
const header = document.querySelector(".header");
const sectionMobileLast = document.querySelector(".mobile__header__last");
const mobileUl = document.createElement("ul");

mobileUl.classList.add("mobile__ul");

const heartLi = document.createElement("li");
const heartA = document.createElement("a");
const heartImg = document.createElement("img");
heartImg.src = "/assets/like.png";
heartA.appendChild(heartImg);
heartLi.appendChild(heartA);
mobileUl.appendChild(heartLi);

const youtubeLi = document.createElement("li");
const youtubeA = document.createElement("a");
const youtubeImg = document.createElement("img");
youtubeImg.src = "/assets/youtube.png";
youtubeA.appendChild(youtubeImg);
youtubeLi.appendChild(youtubeA);
mobileUl.appendChild(youtubeLi);

const facebookLi = document.createElement("li");
const facebookA = document.createElement("a");
const facebookImg = document.createElement("img");
facebookImg.src = "/assets/facebook.png";
facebookA.appendChild(facebookImg);
facebookLi.appendChild(facebookA);
mobileUl.appendChild(facebookLi);

const phoneLi = document.createElement("li");
const phoneA = document.createElement("a");
const phoneImg = document.createElement("img");
phoneImg.src = "/assets/phone.png";
phoneA.appendChild(phoneImg);
phoneLi.appendChild(phoneA);
mobileUl.appendChild(phoneLi);

const phoneTextLi = document.createElement("li");
const phoneTextA = document.createElement("a");
phoneTextA.textContent = "02 437 32 48";
phoneTextA.classList.add("mobile__text_a");
phoneTextLi.appendChild(phoneTextA);
mobileUl.appendChild(phoneTextLi);

mobileMenuButton.addEventListener("click", function () {

  if (Object.values(mobileMenuButton.classList).includes("active")) {
    mobileMenuButton.classList.remove("active");
    header.removeChild(sectionMobileLast);
  } else {
    mobileMenuButton.classList.add("active");
    sectionMobileLast.style.display = 'flex'
    sectionMobileLast.appendChild(mobileUl);
    header.appendChild(sectionMobileLast);
  }
});

// FILTER BUTTONS

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
