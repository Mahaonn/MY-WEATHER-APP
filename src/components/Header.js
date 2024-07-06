import React, { useState } from "react";
import Form from "./Form";

import "../styles/Header.css";

const Header = ({ setCity }) => {
  const [city, setCityInput] = useState("");

  const handleCityChange = (e) => {
    e.preventDefault();
    const newCity = e.target.value;
    setCityInput(newCity);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(city);
  };

  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form handleCityChange={handleCityChange} handleSubmit={handleSubmit} />
    </header>
  );
};

export default Header;
