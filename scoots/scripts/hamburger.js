const hambutton = document.querySelector('.links');
const back = document.querySelector('.show');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    back.classList.toggle('show');
});

back.addEventListener('click', () => {
    hambutton.classList.toggle('show');
    back.classList.toggle('show');
});



document.addEventListener('DOMContentLoaded', function() {
    const location = document.querySelector('.location');
    location.style.height = '500';
});