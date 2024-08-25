import WeatherIcon from "./WeatherIcon";

const WeatherForcastDay = (props) => {
  const maxTemperature = () => {};
  const minTemperature = () => {};
  return (
    <>
      <div className="WeatherForcast-day">Thu</div>{" "}
      <WeatherIcon code="04n" size={36} />{" "}
      <div className="WeatherForcast-temperature">
        <span className="WeatherForcast-temperature-max">19°</span>{" "}
        <span className="WeatherForcast-temperature-min">10°</span>
      </div>
    </>
  );
};

export default WeatherForcastDay;
