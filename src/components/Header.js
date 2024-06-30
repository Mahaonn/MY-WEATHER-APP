import Form from "./Form";
import "../styles/Header.css";

const Header = ({ setCity }) => {
  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form setCity={setCity} />
    </header>
  );
};
export default Header;
