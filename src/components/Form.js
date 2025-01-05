import React, { useState, useEffect } from "react";
import "../styles/Form.css";

const Form = ({ onCityChange }) => {
  const [userInputCity, setUserInputCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);

  useEffect(() => {
    try {
      const storedCities =
        JSON.parse(localStorage.getItem("recentCities")) || [];
      setRecentCities(storedCities);
    } catch (error) {
      console.error("Error accessing localStorage", error);
    }
  }, []);

  const handleCityChange = (e) => {
    setUserInputCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (userInputCity && !recentCities.includes(userInputCity)) {
      const updatedCities = [userInputCity, ...recentCities.slice(0, 5)];
      setRecentCities(updatedCities);
      try {
        localStorage.setItem("recentCities", JSON.stringify(updatedCities));
      } catch (error) {
        console.error("Error saving to localStorage", error);
      }
    }
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
            list="cities"
          />
          <datalist id="cities">
            {recentCities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
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
