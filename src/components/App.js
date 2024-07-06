// App.js
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";
import "../styles/Variables.css";

const App = () => {
  const [cityInApp, setCityInApp] = useState(""); // Оголошуємо стан для міста

  const handleCityChange = (city) => {
    console.log("Місто в компоненті App:", city); // Виводимо значення міста в консоль
    setCityInApp(city); // Зберігаємо місто в стані компонента App
  };

  return (
    <div className="WeatherApp">
      <Header onCityChange={handleCityChange} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
