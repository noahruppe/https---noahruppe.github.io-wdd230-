const banner = document.querySelector('#loose');

let dateNow = new Date();

if (dateNow.getDay() === 1 || dateNow.getDay() === 2 || dateNow.getDay() === 3) {
    banner.removeAttribute('id');
    banner.setAttribute('id', 'banner');
}

const close1 = document.querySelector('#close');

close1.addEventListener('click', ()=>{
    banner.removeAttribute('id');
    banner.setAttribute('id', ('loose'));
})
