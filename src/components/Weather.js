import React from "react";
import "../styles/Weather.css";

const Weather = ({ weatherData }) => {
  return (
    <div className="Weather">
      {weatherData.ready ? (
        <>
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
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}°C</strong>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
