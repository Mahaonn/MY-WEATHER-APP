import React from "react";
import Weather from "./Weather";

import "../styles/Main.css";

const Main = (defaultCity, weatherData, setWeatherData) => {
  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      temperatureDescription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  };
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <h1>
            <Weather defaultCity={defaultCity} weatherData={weatherData} />
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
