// script.js
document.addEventListener("DOMContentLoaded", function() {
    const whiteBox = document.querySelector(".white-box");

    whiteBox.style.transform = "translateX(100%)";
    whiteBox.style.transition = "transform 1s ease";
    setTimeout(() => {
        whiteBox.style.transform = "translateX(0)";}, 100);
    })
