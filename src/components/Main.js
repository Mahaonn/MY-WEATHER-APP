import { useState, useEffect } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import WeatherForecastWeekly from "./WeatherForecastWeekly";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  const defaultCity = "Zilina";
  const city = userCity || defaultCity;

  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData({
          coordinate: response.data.coord,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weatherData) {
    return "Loading...";
  }

  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <WeatherToday data={weatherData} unit={unit} setUnit={setUnit} />
          <WeatherForecastWeekly
            coordinates={weatherData.coordinate}
            unit={unit}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
