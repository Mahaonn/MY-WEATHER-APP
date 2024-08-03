import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";
import "../styles/WeatherForcast.css";

const WeatherForecastWeekly = ({ userCity }) => {
  const defaultCity = "Zilina";
  const city = userCity || defaultCity;
  console.log("Значення в компоненті WeatherForecastWeekly: ", city);
  return (
    <div className="WeatherForecastWeekly">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Thu</div>{" "}
          <WeatherIcon code="04n" size={36} />{" "}
          <div className="WeatherForcast-temperature">
            <span className="WeatherForcast-temperature-max">19°</span>{" "}
            <span className="WeatherForcast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastWeekly;
