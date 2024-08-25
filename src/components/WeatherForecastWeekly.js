import { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Weather.css";
import "../styles/WeatherForcast.css";

const WeatherForecastWeekly = (props) => {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  useEffect(() => {
    if (!loaded && props.coordinates) {
      const fetchForecast = async () => {
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        const apiKey = "71bf820fa0e438fd4a4ee25fb7c05c5a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
          const response = await axios.get(apiUrl);
          setForecast(response.data.daily);
          setLoaded(true);
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };

      fetchForecast();
    }
  }, [loaded, props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecastWeekly">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
};

export default WeatherForecastWeekly;
