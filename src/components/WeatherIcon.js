import clearDay from "../images/clear-day.png";
import clearNight from "../images/clear-night.png";
import partlyCloudyDay from "../images/partly-cloudy.png";
import partlyCloudyNight from "../images/partly-cloudy-night.png";
import scatteredCloudyDay from "../images/partly-cloudy-1.png";
import scatteredCloudyNight from "../images/partly-cloudy-night-1.png";
import brokenCloudyDay from "../images/cloudy.png";
import brokenCloudyNight from "../images/cloudy.png";
import showerRainDay from "../images/hard-rain.png";
import showerRainNight from "../images/hard-rain.png";
import rainDay from "../images/partly-cloudy-rain.png";
import rainNight from "../images/partly-cloudy-rain-night.png";
import thunderstormDay from "../images/thunderstorm-1.png";
import thunderstormNight from "../images/thunderstorm-nigth.png";
import snowDay from "../images/partly-cloudy-snow.png";
import snowNight from "../images/partly-cloudy-snow-night.png";
import mistDay from "../images/mist.png";
import mistNight from "../images/mist.png";

const WeatherIcon = ({ condition, size }) => {
  const mapIconsWeather = {
    "clear-sky-day": clearDay,
    "clear-sky-night": clearNight,
    "few-clouds-day": partlyCloudyDay,
    "few-clouds-night": partlyCloudyNight,
    "scattered-clouds-day": scatteredCloudyDay,
    "scattered-clouds-night": scatteredCloudyNight,
    "broken-clouds-day": brokenCloudyDay,
    "broken-clouds-night": brokenCloudyNight,
    "shower-rain-day": showerRainDay,
    "shower-rain-night": showerRainNight,
    "rain-day": rainDay,
    "rain-night": rainNight,
    "thunderstorm-day": thunderstormDay,
    "thunderstorm-night": thunderstormNight,
    "snow-day": snowDay,
    "snow-night": snowNight,
    "mist-day": mistDay,
    "mist-night": mistNight,
  };
  return (
    <img
      src={mapIconsWeather[condition]}
      alt="Weather icon"
      width={size}
      height={size}
    />
  );
};

export default WeatherIcon;
