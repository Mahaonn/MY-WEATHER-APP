import Weather1 from "./Weather1";

import "../styles/Main.css";

const Main = ({ userCity }) => {
  console.log("Значення city в Main.js:", userCity);
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <Weather1 userCity={userCity} />
        </div>
      </div>
    </main>
  );
};
export default Main;
