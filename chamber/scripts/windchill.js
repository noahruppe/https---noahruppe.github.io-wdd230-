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


const threeDay = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.78&lon=-80.88&units=imperial&appid=fcfb8b6735cdbc7c60d934c07e9f9ae0'

async function apiGetter() {
    try {
        const response = await fetch(threeDay);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            showResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiGetter();


const dayOfWeek = document.querySelector('#day-of-week');

function showResults(data) {
    dayOfWeek.innerHTML = '';

    let uniqueDays = 0;
    let lastDay = null;

    for (let i = 0; i < data.list.length && uniqueDays < 3; i++) {
        const weatherData = data.list[i];

        const date = new Date(weatherData.dt_txt);
        if (date.getHours() !== 12) {
            continue;
        }

        const dayOfWeekString = date.toLocaleDateString('en-US', { weekday: 'long' });

        if (dayOfWeekString !== lastDay) {
            const weatherDescription = weatherData.weather[0].description;
            const temperature = weatherData.main.temp;
            const iconCode = weatherData.weather[0].icon;

            const dayElement = document.createElement('p');
            dayElement.innerHTML = `
                ${dayOfWeekString}: 
                ${weatherDescription}, 
                Temperature: ${temperature} ∘F 
                <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="${weatherDescription} Icon" style="width:50px; height:50px;">
            `;

            dayOfWeek.appendChild(dayElement);

            lastDay = dayOfWeekString;
            uniqueDays++;
        }
    }
}
















