import { useState, useEffect } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import IconsSvg from "./IconsSvg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Weather.css";

const WeatherToday = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (props.data) {
      setWeatherData(props.data);
    }
  }, [props.data]);

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function convertToMph(kmh) {
    return kmh * 0.621371;
  }

  function showCelsius(event) {
    event.preventDefault();
    setWeatherData(props.data);
    props.setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    const convertedData = {
      ...props.data,
      temperature: convertToFahrenheit(props.data.temperature),
      wind: convertToMph(props.data.wind),
    };
    setWeatherData(convertedData);
    props.setUnit("imperial");
  }

  if (!weatherData) {
    return "Loading...";
  }

  return (
    <div className="Weather">
      <div className="overview">
        <h1 className="city">
          <IconsSvg icon={"LocationSvg"} />
          {weatherData.city}
        </h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon
                condition={weatherData.icon}
                alt={weatherData.description}
                size={112}
              />
            </div>
            <div className="float-start weather-temperature">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a
                  href="/"
                  onClick={showCelsius}
                  className={props.unit === "metric" ? "active" : ""}
                >
                  °C
                </a>{" "}
                |{" "}
                <a
                  href="/"
                  onClick={showFahrenheit}
                  className={props.unit === "imperial" ? "active" : ""}
                >
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4 weather-details">
          <ul>
            <li>
              <IconsSvg icon={"HumiditySvg"} /> {weatherData.humidity}%
            </li>
            <li>
              <IconsSvg icon={"WindSvg"} />{" "}
              {parseFloat(weatherData.wind).toFixed(1)}{" "}
              {props.unit === "metric" ? "km/h" : "mph"}
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default WeatherToday;
