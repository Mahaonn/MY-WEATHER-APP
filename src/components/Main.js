import { useState, useEffect } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import WeatherForecastWeekly from "./WeatherForecastWeekly";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  const defaultCity = "Kyiv";
  const city = userCity || defaultCity;

  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const apiKey = "7b358bb45a2c3obdef533te70adb056a";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        );
        setWeatherData({
          coordinate: response.data.coordinates,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.condition.description,
          icon: response.data.condition.icon,
          wind: response.data.wind.speed,
          city: response.data.city,
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
