import WeatherToday from "./WeatherToday";
import WeatherForecastWeekly from "./WeatherForecastWeekly";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  console.log("Значення city в Main.js:", userCity);
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <WeatherToday userCity={userCity} />
          <WeatherForecastWeekly />
        </div>
      </div>
    </main>
  );
};
export default Main;
