import React, { useState } from "react";
import axios from "axios";
import searchingCurrentWeatherAPI from "./searchingCurrentWeatherAPI";

import "../styles/Form.css";

const Form = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weatherData = await searchingCurrentWeatherAPI(city);
      setWeatherData(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  return (
    <div className="form">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search-input"
          placeholder="Enter a city.."
          autoFocus
          required
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
