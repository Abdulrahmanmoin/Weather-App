const apiKey = "17022febb9d41c874c0d92e1e9a8f39f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

let weatherImage = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status = 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.opacity = 0;
    } 
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

        if (data.weather[0].main == "Clear") {
            weatherImage.src = "weatherAppImg/clear.png";
        } else if (data.weather[0].main == "Haze") {
            weatherImage.src = "weatherAppImg/humidity.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "weatherAppImg/rain.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "weatherAppImg/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "weatherAppImg/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "weatherAppImg/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "weatherAppImg/snow.png";
        } else if (data.weather[0].main == "Wind") {
            weatherImage.src = "weatherAppImg/wind.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.opacity = 100;
    
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
