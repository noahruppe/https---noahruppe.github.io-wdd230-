const baseUrl = "https://noahruppe.github.io/wdd230/";
const linksUrl = "https://noahruppe.github.io/wdd230/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        lesson.links.forEach((linkData) => {                           //from this line down I had help with chat gpt  
            let card = document.createElement("section");
            let link = document.createElement("a");

            link.setAttribute('href', baseUrl + linkData.url);
            link.textContent = linkData.title;

            card.appendChild(link);
            cards.appendChild(card);
        });
    });
};

getLinks();



const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.the-weather');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.78&lon=-80.88&units=imperial&appid=fcfb8b6735cdbc7c60d934c07e9f9ae0';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

