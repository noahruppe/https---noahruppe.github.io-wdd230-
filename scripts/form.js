

const thep1 = document.querySelector('#the-password1');
const thep2 = document.querySelector('#the-password2');
const message = document.querySelector('#form-message');

thep2.addEventListener("focusout", checkSam);

function checkSam() {
    if (thep1.value !== thep2.value) {
        message.textContent = "PASSWORDS DO NOT MATCH!";
        message.style.visibility = "visible";
        thep2.style.backgroundColor = "#fff0f3";
        thep2.value = "";
        thep2.focus();
    } else {
        message.style.visibility = "hidden";
        thep2.style.backgroundColor = "#fff";
        thep2.style.color = "#000";
    }
}






const rangvalue = document.getElementById("rangvalue");

const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);

range.addEventListener('input', displayRatingValue);


function displayRatingValue(){
   rangvalue.innerHTML = range.value;
}




