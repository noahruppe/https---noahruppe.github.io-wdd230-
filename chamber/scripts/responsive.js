const options = {year: 'numeric'}
document.getElementById('currentYear').textContent =new Date().toLocaleDateString('en-US',options);


const modified = {day: 'numeric',month: 'numeric',year: 'numeric',hour: 'numeric', minute: 'numeric'}
let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModified.toLocaleDateString('en-US',modified)


//java script for the hamburger menu 
const mainnav = document.querySelector('.link')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

})


// javascript for dark mode

let backgound_box = document.querySelector(".background-box");

let toggle_box = document.querySelector(".toggle-box");

let cirlce = document.querySelector(".circle");

let checkbox = document.getElementById("checkbox");

let body = document.querySelector('body');
// let header = document.querySelector('header');
// let headerLinks = document.querySelectorAll('header a')
let cards = document.querySelector('.cards');
let cards_h2 = document.querySelector('.cards h2');
let card1 = document.querySelector('.card1');
let land = document.querySelector('.land');
roofing = document.querySelector('roofing');




toggle_box.onclick = () =>{

    if(checkbox.checked){
        cirlce.style.left = "40px";
        cirlce.style.backgroundColor = "#000";
        toggle_box.style.backgroundColor = "#fff";
        body.classList.toggle('dark-mode');
        // header.classList.toggle('dark-mode');
        // headerLinks.forEach(link => link.classList.toggle("dark-mode"));
        cards.classList.toggle('dark-mode');
        cards_h2.classList.toggle('dark-mode');
        card1.classList.toggle('dark-mode');
        land.classList.toggle('dark-mode');
        roofing.classList.toggle('dark-mode');
    
    }
    else{
        cirlce.style.left = "0px";
        cirlce.style.backgroundColor = "#fff";
        toggle_box.style.backgroundColor = "#000"

    }
}