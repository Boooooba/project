const imgEl = document.querySelector(".img");
const svgEl = document.querySelector(".svg");
const hiddenEls = document.querySelectorAll(".hidden");
const welcomingDiv = document.getElementById("welcomingText");
const welcomingEngDiv = document.getElementById("welcomingTextEng");
const offCanvas = document.getElementById("offcanvasDarkNavbar");
const navBar = document.getElementById("navBar");

//images transition onload
window.onload = () => {
  imgEl.classList.add("show");
  svgEl.classList.add("show");
};

//texts transition on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenEls.forEach((el) => observer.observe(el));

// sections code
// const observerSectios = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

const sectionElemets = document.querySelectorAll(".text-figure");
sectionElemets.forEach((el) => observer.observe(el));
