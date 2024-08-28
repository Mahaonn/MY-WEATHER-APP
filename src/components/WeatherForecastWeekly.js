import { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Weather.css";
import "../styles/WeatherForecast.css";

const WeatherForecastWeekly = (props) => {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("Coordinates:", props.coordinates);
    setLoaded(false);
  }, [props.coordinates]);

  useEffect(() => {
    if (!loaded && props.coordinates) {
      const fetchForecast = async () => {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
          const response = await axios.get(apiUrl);
          setForecast(response.data.daily.slice(1, 7));
          setLoaded(true);
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };

      fetchForecast();
    }
  }, [loaded, props.coordinates]);

  if (!forecast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WeatherForecastWeekly">
      <div className="row">
        {forecast.map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} unit={props.unit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecastWeekly;
