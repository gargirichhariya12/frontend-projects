const API_KEY = "8f3c6e3d5c3e3f5e5b5f5e5f5e5f5e5f";
y;

const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Smoke: "🌫️",
  Haze: "🌫️",
  Dust: "🌫️",
  Fog: "🌫️",
  Sand: "🌫️",
  Ash: "🌫️",
  Squall: "💨",
  Tornado: "🌪️",
};

document.getElementById("cityInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    showError("Please enter a city name");
    return;
  }

  showLoading();

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b2f8e3f3c4e5d6a7b8c9d0e1f2a3b4c&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError("City not found. Please try again.");
  }
}

function displayWeather(data) {
  document.getElementById(
    "cityName"
  ).textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("date").textContent = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const mainWeather = data.weather[0].main;
  document.getElementById("weatherIcon").textContent =
    weatherIcons[mainWeather] || "🌡️";

  document.getElementById("temperature").textContent = `${Math.round(
    data.main.temp
  )}°C`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById("feelsLike").textContent = `${Math.round(
    data.main.feels_like
  )}°C`;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
  document.getElementById("windSpeed").textContent = `${Math.round(
    data.wind.speed * 3.6
  )} km/h`;
  document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;

  document.getElementById("weatherData").classList.remove("hidden");
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("error").classList.add("hidden");
}

function showLoading() {
  document.getElementById("weatherData").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("error").classList.add("hidden");
}

function showError(message) {
  document.getElementById("weatherData").classList.add("hidden");
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("error").classList.remove("hidden");
  document.getElementById("error").textContent = message;
}

document.getElementById("cityInput").value = "Indore";
getWeather();
