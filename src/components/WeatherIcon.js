import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = (props) => {
  const mapIconsWeather = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "CLEAR_DAY",
    "10n": "CLEAR_DAY",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={mapIconsWeather[props.code]}
      color="#f5c7f7"
      size={props.size}
      animated={true}
    />
  );
};

export default WeatherIcon;
