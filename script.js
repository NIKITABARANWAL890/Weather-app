const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c11cdf904a0a0989deb208f2fe879ca2";
const input = document.querySelector(".searched");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.ok) {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + "km/h";
    } else {
        alert('City not found!');
    }
}

document.querySelector(".fa-search").addEventListener('click', () => {
    const city = input.value.trim(); // Get the input value and remove any extra spaces
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city name');
    }
});
