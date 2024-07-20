import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";

const Weather = ({ userCity }) => {
  const defaultCity = "Zilina";
  const city = userCity || defaultCity;
  console.log("Значення city в Weather.js:", city);
  const [unit, setUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";

  const handleResponse = useCallback((response) => {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log("Дані про погоду:", response.data);
  }, []);

  const search = useCallback(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city, unit, handleResponse]);

  useEffect(() => {
    search();
  }, [search]);

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (weatherData.ready) {
    const temperature =
      unit === "metric"
        ? weatherData.temperature
        : convertToFahrenheit(weatherData.temperature);
    return (
      <div className="Weather">
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date.toLocaleString()}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-start"
              />
              <div className="float-start">
                <strong>{Math.round(temperature)}</strong>
                <span className="units">
                  <a href="/" onClick={showCelsius}>
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" onClick={showFahrenheit}>
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};
export default Weather;
