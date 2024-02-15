fetch('https://api.open-meteo.com/v1/forecast?latitude=35.7826&longitude=-80.8873&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto')
    .then(response => response.json())
    .then(data => {
        // Extract relevant weather information
        const temperature = data.current.temperature_2m;
        const windSpeed = data.current.wind_speed_10m;

        // Check if temperature and wind speed meet specification limits
        if (temperature <= 50 && windSpeed > 3.0) {
            // Calculate wind chill factor
            const windChill = calculateWindChill(temperature, windSpeed);
            // Display wind chill factor
            document.getElementById('weather-info').innerHTML = `
                <p>Temperature: ${temperature}°F</p>
                <p>Wind Speed: ${windSpeed} mph</p>
                <p>Wind Chill Factor: ${windChill.toFixed(2)}°F</p>
            `;
        } else {
            // Display "N/A" if specification limits not met
            document.getElementById('weather-info').innerHTML = `
                <p>Temperature: ${temperature}°F</p>
                <p>Wind Speed: ${windSpeed} mph</p>
                <p>Wind Chill Factor: N/A</p>
            `;
        }
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });

function calculateWindChill(temperature, windSpeed) {
    // Formula to calculate wind chill factor
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}