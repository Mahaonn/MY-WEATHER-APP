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

  const clearInput = () => {
    setUserInputCity("");
  };

  return (
    <div className="form">
      <form className="search__form" onSubmit={handleSearch}>
        <div className="input__container">
          <input
            className="search__input"
            type="text"
            placeholder="Enter a city.."
            value={userInputCity}
            onChange={handleCityChange}
          />
          {userInputCity && (
            <button type="button" onClick={clearInput} className="clear__btn">
              &times;
            </button>
          )}
        </div>
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
