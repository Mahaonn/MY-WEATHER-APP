import { useState, useEffect } from "react";

const FormattedDate = (props) => {
  const [caurrentTime, setCurrentTime] = useState(new Date());
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
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  const hours = props.date.getHours().toString().padStart(2, "0");
  const minutes = props.date.getMinutes().toString().padStart(2, "0");
  const seconds = caurrentTime.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      {day}, {hours}:{minutes}:{seconds} {month}
    </div>
  );
};

export default FormattedDate;
