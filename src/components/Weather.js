import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";
import Sunny from "../images/Sunny.png";

const Weather = ({ userCity }) => {
  console.log("Значення city в Weather.js:", userCity);
  let weatherData = {
    city: "Kyiv",
    temperature: 15,
    date: "Monday 15:00",
    description: "Sunny",
    humidity: 15,
    wind: 2,
  };
  return (
    <div className="Weather">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={Sunny}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
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
};
export default Weather;
