// Header.js
import React from "react";
import Form from "./Form";

import "../styles/Header.css";

export default function Header({ onCityChange }) {
  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form onCityChange={onCityChange} />{" "}
      {/* Передаємо функцію для обробки міста */}
    </header>
  );
}
