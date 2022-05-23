const pictureFrame = document.querySelector("#picture-frame");

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

pictureFrame.appendChild(slides[currentSlide]);

const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener('click', () => {
    pictureFrame.removeChild(slides[currentSlide]);
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    pictureFrame.appendChild(slides[currentSlide]);
});

const prevBtn = document.querySelector("#prev-btn");

prevBtn.addEventListener('click', () => {
    pictureFrame.removeChild(slides[currentSlide]);
    if (currentSlide !== 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    pictureFrame.appendChild(slides[currentSlide]);
});


