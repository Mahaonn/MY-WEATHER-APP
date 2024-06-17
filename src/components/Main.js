import Weather from "./Weather";

import "../styles/Main.css";

export default function Main() {
  return (
    <main className="main">
      <div className="weather-app-backdrop">
        <div className="weather-app weather-app-container">
          <h1>
            {" "}
            <Weather defaultCity="Kyiv" />
          </h1>
        </div>
      </div>
    </main>
  );
}
