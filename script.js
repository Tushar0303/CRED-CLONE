const section4 = document.querySelector('.section-4');

const section4Left1 = document.querySelector('.section-4-left-1');
const section4Left2 = document.querySelector('.section-4-left-2');
const section4Left3 = document.querySelector('.section-4-left-3');
const section4Left4 = document.querySelector('.section-4-left-4');

const section4RightImg = document.querySelector('.section-4-right-img');

const section4RightImage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const section4RightImage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const section4RightImage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const section4RightImage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";

// event Listener

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const section40ffsetTop = section4.offsetTop;
    const section4Height = section4.clientHeight;

    if ((scrollPosition > section40ffsetTop) && (scrollPosition < section4Height + section40ffsetTop)) {
        if (scrollPosition > section40ffsetTop && scrollPosition < section40ffsetTop + 300) {
            section4Left1.style.opacity = 1
            section4Left1.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight && scrollPosition < section40ffsetTop + innerHeight + 300) {
            section4Left2.style.opacity = 1
            section4Left2.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight * 2 && scrollPosition < section40ffsetTop + innerHeight * 2 + 300) {
            section4Left3.style.opacity = 1
            section4Left3.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight * 3 && scrollPosition < section40ffsetTop + innerHeight * 3 + 300) {
            section4Left4.style.opacity = 1
            section4Left4.style.transition = "opacity 1s ease-in-out"
        } else {
            section4Left1.style.opacity = 0;
            section4Left2.style.opacity = 0;
            section4Left3.sytle.opacity = 0;
            section4Left4.style.opacity = 0;
        }
        if (scrollPosition > section40ffsetTop && scrollPosition < section40ffsetTop + innerHeight) {
            section4RightImg.src = section4RightImage1;
            section4RightImg.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight && scrollPosition < section40ffsetTop + innerHeight * 2) {
            section4RightImg.src = section4RightImage2;
            section4RightImg.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight * 2 && scrollPosition < section40ffsetTop + innerHeight * 3) {
            section4RightImg.src = section4RightImage3;
            section4RightImg.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section40ffsetTop + innerHeight * 3 && scrollPosition < section40ffsetTop + innerHeight * 4) {
            section4RightImg.src = section4RightImage4;
            section4RightImg.style.transition = "opacity 1s ease-in-out"
        } else {
            section4RightImg.src = section4RightImage1;
        }
    }
})    