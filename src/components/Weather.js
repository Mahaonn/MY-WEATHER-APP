import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";
import Sunny from "../images/Sunny.png";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [weatherData, setWeatherData] = useState({});

  const changeUnit = () => {
    if (unit === "celsius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celsius");
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="Weather">
      <div className="overview">
        <h1>{props.city}</h1>
        <ul>
          <li>Last updated: {props.date}</li>
          <li>{props.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={Sunny} alt={props.description} className="float-left" />
            <div className="float-left">
              <strong>{props.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
