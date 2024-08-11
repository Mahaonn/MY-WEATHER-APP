import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Weather.css";
import "../styles/WeatherForcast.css";

const WeatherForecastWeekly = (props) => {
  const handleResponse = (response) => {
    console.log(response.data);
    console.log(response.data.lat);

    console.log(response.data.lon);
  };
  let longitude = props.coordinate.lon;
  let latitude = props.coordinate.lat;
  const apiKey = "c119ffef35b7245a5e03b6e5724ae961";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecastWeekly">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Thu</div>{" "}
          <WeatherIcon code="04n" size={36} />{" "}
          <div className="WeatherForcast-temperature">
            <span className="WeatherForcast-temperature-max">19°</span>{" "}
            <span className="WeatherForcast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastWeekly;
