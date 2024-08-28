import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "../styles/Variables.css";
import "../styles/WeatherForecast.css";

const WeatherForecastDay = (props) => {
  const [weatherData, setWeatherData] = useState(props.data);

  useEffect(() => {
    setWeatherData(props.data);
  }, [props.data, props.unit]);

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  const maxTemperature = () => {
    return props.unit === "metric"
      ? Math.round(weatherData.temp.max)
      : Math.round(convertToFahrenheit(weatherData.temp.max));
  };

  const minTemperature = () => {
    return props.unit === "metric"
      ? Math.round(weatherData.temp.min)
      : Math.round(convertToFahrenheit(weatherData.temp.min));
  };

  const day = () => {
    let date = new Date(weatherData.dt * 1000);
    return date.toLocaleDateString("en-us", { weekday: "short" });
  };

  return (
    <>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={weatherData.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°|
        </span>
        <span className="WeatherForecast__temperature_min">
          {minTemperature()}°
        </span>
      </div>
    </>
  );
};

export default WeatherForecastDay;
