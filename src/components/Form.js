// Form.js
import React, { useState } from "react";

import "../styles/Form.css";

const Form = ({ onCityChange }) => {
  const [userInputCity, setUserInputCity] = useState("Kyiv");

  const handleCityChange = (e) => {
    setUserInputCity(e.target.value);
    onCityChange(e.target.value); // Викликаємо функцію для передачі міста
  };
  const handleSearch = () => {
    onCityChange(userInputCity); // Викликаємо функцію для передачі міста
  };
  return (
    <div className="form">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Enter a city.."
          value={userInputCity}
          onChange={handleCityChange}
        />
        <button type="button" className="search__btn" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
