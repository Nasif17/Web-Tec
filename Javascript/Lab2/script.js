const images = [
    'sixty dom',
    'moynamoti',
    'national monument',
    'sundorban'
];

let currentIndex = 0;

const sliderImages = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlider() {
    sliderImages.style.transform = `translateX(-${currentIndex * 23}%)`;  
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

// Auto slideshow
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}, 2000);
