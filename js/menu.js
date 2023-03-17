const container = document.querySelector("[data-container]");
const img = document.querySelector("[data-img]");

window.addEventListener("scroll", function(){
    container.classList.toggle("active", window.scrollY > 0);
    img.classList.toggle("active", window.scrollY > 0);
});