import Weather from "./Weather";

import "../styles/Main.css";

const Main = ({ defaultCity, weatherData }) => {
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <h1>
            {" "}
            <Weather
              defaultCity={defaultCity}
              temperature={weatherData.temperature}
              humidity={weatherData.humidity}
            />
          </h1>
        </div>
      </div>
    </main>
  );
};
export default Main;
