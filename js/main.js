let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", show_menu)

let button = document.querySelector(".menu-button")
button.addEventListener("click", show_menu)


const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let currentIndex = 0;

carousel.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
    currentIndex = images.length - 1; 
    } 
    updateCarousel(); 
});

carousel.querySelector('.next').addEventListener('click', () => { 
currentIndex++; 
if (currentIndex > images.length - 1) {
currentIndex = 0; 
} 
    updateCarousel(); 
});

function updateCarousel() {
    console.log("in")
    images.forEach((image, index) => {
    if (index === currentIndex) {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
    });
}

function show_menu(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")

};