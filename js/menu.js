const container = document.querySelector("[data-container]");
const img = document.querySelector("[data-img]");
const back = document.querySelector("[data-img-back]");

window.addEventListener("scroll", function(){
    container.classList.toggle("active", window.scrollY > 0);
    img.classList.toggle("active", window.scrollY > 0);
    back.classList.toggle("active", window.scrollY > 0);
});