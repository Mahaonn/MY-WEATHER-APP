import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";
import "../styles/Variables.css";

function App() {
  return (
    <div className="WeatherApp">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
