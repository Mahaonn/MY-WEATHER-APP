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
      ? Math.round(weatherData.temperature.maximum)
      : Math.round(convertToFahrenheit(weatherData.temperature.maximum));
  };

  const minTemperature = () => {
    return props.unit === "metric"
      ? Math.round(weatherData.temperature.minimum)
      : Math.round(convertToFahrenheit(weatherData.temperature.minimum));
  };

  const day = () => {
    let date = new Date(weatherData.time * 1000);
    return date.toLocaleDateString("en-us", { weekday: "short" });
  };

  return (
    <>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon condition={weatherData.condition.icon} size={56} />
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
