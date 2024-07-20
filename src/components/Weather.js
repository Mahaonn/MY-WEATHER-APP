import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ userCity }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_APIKEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [userCity]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {userCity}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
