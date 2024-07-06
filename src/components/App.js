import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";
import "../styles/Variables.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    ready: false,
    city: "",
    temperature: "",
    temperatureDescription: "",
    humidity: "",
    wind: "",
    icon: "",
  });

  return (
    <div className="App">
      <Header setCity={setCity} />
      <Main defaultCity={city} weatherData={weatherData} />
      <Footer />
    </div>
  );
};

export default App;
