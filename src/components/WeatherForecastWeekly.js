import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";

const WeatherForecastWeekly = ({ userCity }) => {
  const defaultCity = "Zilina";
  const city = userCity || defaultCity;
  console.log("Значення в компоненті WeatherForecastWeekly: ", city);
  return (
    <div className="WeatherForecastWeekly">
      <div className="row">
        <div className="col">Thu Icon 19 10</div>
      </div>
    </div>
  );
};

export default WeatherForecastWeekly;
