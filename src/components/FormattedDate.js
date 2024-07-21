const FormattedDate = (props) => {
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

  return (
    <div>
      {day}, {hours}:{minutes} {month}
    </div>
  );
};

export default FormattedDate;
