// Declared query selectors to get html element

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    // API key from openweathermap
    const APIKey = '01eda860a88d3f76dd50c1f4982c4d67';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            
// more case maybe add later
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    console.log("Clear");
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    console.log("Rain");
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    console.log("Snow");
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    console.log("Clouds");
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    console.log("Haze");
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    console.log("Haze");
                    break;
                case 'Drizzle':
                    image.src = 'images/rain.png';
                    console.log("Haze");
                    break;
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});