const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const lat = '-17.3895';
const lon = '-66.1568';

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(urlCurrent);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('weather-current').innerHTML = `
        <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°F</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

            document.getElementById('weather-forecast').innerHTML = dailyData.map(day => {
                const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
                return `<p><strong>${date}:</strong> ${Math.round(day.main.temp)}°F</p>`;
            }).join('');
        }
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

fetchWeather();
fetchForecast();