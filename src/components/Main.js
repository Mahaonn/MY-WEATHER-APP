import Weather from "./Weather";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  console.log("Значення city в Main.js:", userCity);
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <Weather userCity={userCity} />
        </div>
      </div>
    </main>
  );
};
export default Main;
