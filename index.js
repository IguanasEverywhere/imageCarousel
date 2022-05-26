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
    changeSlide(currentSlide);
});

const prevBtn = document.querySelector("#prev-btn");
prevBtn.addEventListener('click', () => {
    pictureFrame.removeChild(slides[currentSlide]);
    if (currentSlide !== 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    changeSlide(currentSlide);
});

const changeSlide = () => {
    circles.forEach(circle => {
        circle.setAttribute("style", "background-color: none;");
    });
    pictureFrame.appendChild(slides[currentSlide]);
    let currentImg = slides[currentSlide].firstElementChild;
    currentImg.classList.add("animate-slide");
    circlesArray[currentSlide].setAttribute("style", "background-color: red;");
}

// navigation circles

const selectionCircles = document.querySelector("#selection-circles");
let circlesArray = [];

for (let i = 0; i < slides.length; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    selectionCircles.appendChild(circle);
    circlesArray.push(circle);
}

let circles = document.querySelectorAll(".circle");
circles[0].setAttribute("style", "background-color: red;");
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        pictureFrame.removeChild(slides[currentSlide]);
        currentSlide = circlesArray.indexOf(circle);
        changeSlide(currentSlide);
    });
});

const advanceSlideTimer = () => {
    pictureFrame.removeChild(slides[currentSlide]);
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
 
    changeSlide(currentSlide);
}

setInterval(advanceSlideTimer, 5000);


