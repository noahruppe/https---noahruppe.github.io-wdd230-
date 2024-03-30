const close1 = document.querySelector('.temp-max');
const theTempMax = document.querySelector('#the-temp-max');
const header = document.querySelector('header');

close1.addEventListener('click', () => {
    theTempMax.remove(); 
    header.style.marginTop = '0px'; 
});
