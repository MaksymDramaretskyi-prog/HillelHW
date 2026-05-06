const API_KEY = "d364cf4c111405c9db13f6a94136ad79";
const CITY = "Bergen";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

async function getWeather() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ошибка сети");
    }

    const data = await response.json();

    renderWeather(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

function renderWeather(data) {
  document.getElementById("city").textContent = data.name;

  document.getElementById("temp").textContent =
    Math.round(data.main.temp) + "°C";

  document.getElementById("feels").textContent =
    Math.round(data.main.feels_like) + "°C";

  document.getElementById("humidity").textContent =
    data.main.humidity + "%";

  document.getElementById("wind").textContent =
    data.wind.speed + " m/s";

  document.getElementById("desc").textContent =
    data.weather[0].description;

  const icon = data.weather[0].icon;
  document.getElementById("icon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

// кнопка
document.getElementById("refresh").addEventListener("click", getWeather);

// первый запуск
getWeather();