import React from "react";
import Form from "./Form";

import "../styles/Header.css";

const Header = ({ onCityChange }) => {
  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form onCityChange={onCityChange} />
    </header>
  );
};
export default Header;
