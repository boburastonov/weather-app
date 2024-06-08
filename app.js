const apiKey = "b7ba5d2e74c8f8cfed528acb6e16db6e";
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
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if ((data.weather[0] = "Clouds")) {
      weatherIcon.src = "images/clouds.png";
    } else if ((data.weather[0] = "Clear")) {
      weatherIcon.src = "images/clear.png";
    } else if ((data.weather[0] = "Drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    } else if ((data.weather[0] = "Mist")) {
      weatherIcon.src = "images/mist.png";
    } else if ((data.weather[0] = "Snow")) {
      weatherIcon.src = "images/snow.png";
    } else {
      weatherIcon.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

/* 
Sevgi bu armon,
Atrofi o'rmon.
Uni ichida yolg'onlar,
Yana g'alati hayvonlar,
Holati aldarlar.
Sog'intiradi beshavqatlik qilib,
Mani yorim aldoqchi,
Har bir gaplari uni yolg'onchi.
Ob ketib qolishing mumkin,
Jahannamga sani nayranglaring bilan hey
*/

/* 
Sevgi bu armon,
Atrofi o'rmon.
Uni ichida yolg'onlar,
Yana g'alati hayvonlar,
Holati aldarlar.
Sog'intiradi beshavqatlik qilib,
Mani yorim aldoqchi,
Har bir gaplari uni yolg'onchi.
Ob ketib qolishing mumkin,
Jahannamga sani nayranglaring bilan hey
*/
