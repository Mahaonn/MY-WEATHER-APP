import Form from "./Form";
import "../styles/Header.css";

const Header = () => {
  const handleCityChange = (city) => {
    console.log("Місто в компоненті Header:", city);
  };
  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form onCityChange={handleCityChange} />
    </header>
  );
};
export default Header;
