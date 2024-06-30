import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";
import "../styles/Variables.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  };
  function search() {
    const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="WeatherApp">
      <Header setCity={setCity} />
      <Main defaultCity={city} weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
