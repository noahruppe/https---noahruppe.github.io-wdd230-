const mainnav = document.querySelector('.link')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

})