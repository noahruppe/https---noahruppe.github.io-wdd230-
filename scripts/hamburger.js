const mainnav = document.querySelector('.link')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

})

 const visitsDisplay = document.querySelector('.visits')
 
 let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

 if(numVisits !== 0 ){
    visitsDisplay.textContent = numVisits
 }
 else{
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
 }

 numVisits++;

 localStorage.setItem("numVisits-ls", numVisits);