// Form.js
import React, { useState } from "react";

import "../styles/Form.css";

const Form = ({ onCityChange }) => {
  const [userInputCity, setUserInputCity] = useState("");

  const handleCityChange = (e) => {
    e.preventDefault();
    setUserInputCity(e.target.value);
  };
  const handleSearch = () => {
    onCityChange(userInputCity);
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
