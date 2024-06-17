import Form from "./Form";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Weather App</h1>
      <Form />
    </header>
  );
}
