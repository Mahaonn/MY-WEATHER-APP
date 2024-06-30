import axios from "axios";
import React, { useState, useEffect } from "react";

import "../styles/Form.css";

const Form = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  };
  function search() {
    const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  return (
    <div className="form">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search-input"
          placeholder="Enter a city.."
          required
          autoFocus
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
