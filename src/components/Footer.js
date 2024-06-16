import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <address>
        Coded by&nbsp;
        <a
          className="address-link"
          href="https://github.com/Mahaonn"
          target="_blank"
          rel="noreferrer"
        >
          Yevheniia Kovzikova
        </a>
        , is open-sourced on&nbsp;
        <a
          className="address-link"
          href="https://github.com/Mahaonn/my-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub&nbsp;
        </a>
        and hosted on&nbsp;
        <a
          className="address-link"
          href="https://citycast-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </address>
    </footer>
  );
}
