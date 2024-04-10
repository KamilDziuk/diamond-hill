
// Toggle hamburger menu and navigation menu visibility on click

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
// Close hamburger menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));
// Toggle sticky class for the navigation header on scroll
window.addEventListener("scroll", () => {
  let nav_headar = document.querySelector(".nav_headar");
  nav_headar.classList.toggle("sticky", window.scrollY > 0);
});


// Intersection Observer configuration for lazy-loading images in a vertical slider
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Callback function for Intersection Observer
const imageWrappers = document.querySelectorAll(
  ".vertical-slider.desktop-only .left-container_main .image-wrapper"
);
function callback(entries, observer) {
  entries.forEach((entry) => {
    const currentContentWrapper = entry.target;
    const index = parseInt(currentContentWrapper.dataset.index);
    if (entry.isIntersecting) {
      currentContentWrapper.classList.add("in-view");
      if (imageWrappers[index]) {
        imageWrappers[index].classList.add("show");
        for (let i = index + 1; i < imageWrappers.length; i++) {
          imageWrappers[i].classList.remove("show");
        }
      }
    } else {
      currentContentWrapper.classList.remove("in-view");
    }
  });
}
// Create an Intersection Observer instance
const observer = new IntersectionObserver(callback, options);

// Observe content wrappers for lazy-loading images
const contentWrappers = document.querySelectorAll(
  ".vertical-slider.desktop-only .right-container_main .content-wrapper"
);
contentWrappers.forEach((wrapper) => {
  observer.observe(wrapper);
});