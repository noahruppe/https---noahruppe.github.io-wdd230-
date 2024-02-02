const options = {year: 'numeric'}
document.getElementById('currentYear').textContent =new Date().toLocaleDateString('en-US',options);


const modified = {day: 'numeric',month: 'numeric',year: 'numeric',hour: 'numeric', minute: 'numeric'}
let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModified.toLocaleDateString('en-US',modified)


const mainnav = document.querySelector('.link')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

})