import { useState, useEffect } from "react";

const FormattedDate = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      {day}, {currentDate} {}
      {month}{" "}
      <span className="monospace">
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default FormattedDate;
