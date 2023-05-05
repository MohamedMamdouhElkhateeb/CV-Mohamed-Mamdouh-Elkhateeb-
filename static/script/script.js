/*
====================================//             //====================================
===================================//  utilities  //=====================================
==================================//             //======================================
*/

/*
====================================//             //====================================
===================================//  variables  //=====================================
==================================//             //======================================
*/

const skills = document.getElementsByClassName("skills__content__skill");
const dialog = document.getElementById("dialog");
const dialog_dark = document.getElementById("dialog_dark");
const dialog__content__close = document.getElementsByClassName(
  "dialog__content__close"
)[0];
// set skills dataset desc to getWikiData(skill.innerText)

/*
====================================//             //====================================
===================================//  functions  //=====================================
==================================//             //======================================
*/

const getWikiData = (title) => {
  let description = fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
  ).then((data) => data.json());
  console.log(description);
  return description;
};

setTimeout(() => {
  dialog.style.display = "block";
  dialog.style.opacity = "1";
  dialog_dark.style.opacity = "1";
  dialog_dark.style.display = "block";
  //   change before to obacity 1
}, 3000);

/*
====================================//             //====================================
===================================//  listeners  //=====================================
==================================//             //======================================
*/

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var header = document.querySelector("header");
  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

dialog__content__close.addEventListener("click", () => {
  dialog.style.opacity = "0";
  dialog.style.visibility = "hidden";

  dialog_dark.style.opacity = "0";
  dialog_dark.style.visibility = "hidden";
});

dialog_dark.addEventListener("click", () => {
  dialog.style.opacity = "0";
  dialog.style.visibility = "hidden";

  dialog_dark.style.opacity = "0";
  dialog_dark.style.visibility = "hidden";
});

/*
====================================//             //====================================
===================================//  main code  //=====================================
==================================//             //======================================
*/

// deprecated...

// for (let skill of skills) {
//   skill.dataset.desc = getWikiData(skill.innerText);
// }
