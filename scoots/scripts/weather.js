const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.the-weather');
const humidity = document.querySelector('#humidity');
const tempMax = document.querySelector('#temp-max');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42616&lon=-86.92267&units=imperial&appid=fcfb8b6735cdbc7c60d934c07e9f9ae0';

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
    currentTemp.innerHTML = ` Temprature: ${data.main.temp}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    tempMax.innerHTML = `Todays's Temprature max: ${data.main.temp_max}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
}


const threeDay = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42616&lon=-86.92267&units=imperial&appid=fcfb8b6735cdbc7c60d934c07e9f9ae0';

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

    let nextDayForecast = data.list.find(weatherData => {
        const date = new Date(weatherData.dt_txt);
        return date.getHours() === 15; // Check if the hour is 15 (3 PM)
    });

    if (nextDayForecast) {
        const date = new Date(nextDayForecast.dt_txt);
        const dayOfWeekString = date.toLocaleDateString('en-US', { weekday: 'long' });

        const weatherDescription = nextDayForecast.weather[0].description;
        const temperature = nextDayForecast.main.temp;
        const iconCode = nextDayForecast.weather[0].icon;

        const dayElement = document.createElement('div');
        dayElement.innerHTML = `
            <h2>${dayOfWeekString}</h2>
            <p>${weatherDescription}</p>
            <p>Temperature: ${temperature} ∘F</p>
            <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${weatherDescription} Icon" style="width:50px; height:50px;">
        `;
        
        dayOfWeek.appendChild(dayElement);
    } else {
        console.log("No forecast data available for tomorrow at 3 PM.");
    }
}

















