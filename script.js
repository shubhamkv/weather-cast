const apiKey = "df244d273183e6c15ec651a5d6f65a74";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      document.body.style.backgroundImage = "url('images/cloud-back.jpeg')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      document.body.style.backgroundImage = "url('images/clear-back.jpeg')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      document.body.style.backgroundImage = "url('images/rain-back.jpg')";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      document.body.style.backgroundImage = "url('images/rain-back.jpg')";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      document.body.style.backgroundImage = "url('images/mist-back.jpg')";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
      document.body.style.backgroundImage = "url('images/snow-back.jpeg')";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
