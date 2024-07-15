const container = document.querySelector('.container');
const slideright = document.querySelector('.right-slide');
const slideleft = document.querySelector('.left-slide');
const upbutton = document.querySelector('.up-button');
const downbutton = document.querySelector('.down-button');
const slidelength = slideright.querySelectorAll('div').length;
console.log();

let activeindex = 0;
slideleft.style.top = `-${(slidelength - 1) * 100}vh`;

upbutton.addEventListener('click', () => changeSlide('up'));
downbutton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const slideHeight = container.clientHeight;
    console.log(slideHeight); // Log slideHeight to the console
    if (direction === 'up') {
        activeindex++;
        if (activeindex > slidelength - 1) {
            activeindex = 0;
        }
    }
    else if(direction==='down')
    {
        activeindex--;
        if (activeindex < 0) {
            activeindex = slidelength-1;
        }
    }
    slideright.style.transform = `translateY(-${activeindex * slideHeight}px)`;
    slideleft.style.transform = `translateY(${activeindex * slideHeight}px)`;
};
