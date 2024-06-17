import "../styles/Form.css";

const Form = () => {
  return (
    <div className="form">
      <form className="search__form" id="search-form">
        <input
          className="search__input"
          type="text"
          id="search-input"
          placeholder="Enter a city.."
          required
        />
        <button type="submit" value="Search" className="search__btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
