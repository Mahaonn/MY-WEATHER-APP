// Form.js
import React, { useState } from "react";

import "../styles/Form.css";

const Form = ({ onCityChange }) => {
  const [userInputCity, setUserInputCity] = useState("");

  const handleCityChange = (e) => {
    setUserInputCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onCityChange(userInputCity);
  };

  return (
    <div className="form">
      <form className="search__form" onSubmit={handleSearch}>
        <input
          className="search__input"
          type="text"
          placeholder="Enter a city.."
          value={userInputCity}
          onChange={handleCityChange}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
