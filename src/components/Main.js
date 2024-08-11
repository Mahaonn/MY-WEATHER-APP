import WeatherToday from "./WeatherToday";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  const defaultCity = "Zilina";
  const city = userCity || defaultCity;
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <WeatherToday city={city} />
        </div>
      </div>
    </main>
  );
};
export default Main;
