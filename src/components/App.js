// App.js
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";
import "../styles/Variables.css";

const App = () => {
  const [cityInApp, setCityInApp] = useState("");

  const handleCityChange = (city) => {
    console.log("Місто в компоненті App:", city);
    setCityInApp(city);
  };

  return (
    <div className="WeatherApp">
      <Header onCityChange={handleCityChange} />
      <Main userCity={cityInApp} />
      <Footer />
    </div>
  );
};

export default App;
