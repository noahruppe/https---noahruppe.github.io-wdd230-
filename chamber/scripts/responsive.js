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

let body = document.querySelector("body");
let header = document.querySelector("header")
let header_a = document.querySelector("header a")

toggle_box.onclick = () =>{
    if(checkbox.checked){
        cirlce.style.left = "40px";
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        header.style.backgroundColor = "#000";
        header.style.color = "#fff";
        header_a.style.color = "#fff";

    }
    else{
        cirlce.style.left = "0px";
        body.style.backgroundColor = "#F5F3F4";
        header.style.backgroundColor = "#660708";
        header.style.color = "#D3D3D3";
        header_a.style.color = "#D3D3D3";
    }
}