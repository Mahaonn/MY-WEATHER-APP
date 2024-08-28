import icons from "../images/icons.svg";
import "../styles/Weather.css";
import "../styles/Variables.css";

const IconsSvg = ({ icon, color, size }) => (
  <svg className="svg-icon" fill={color} width={size} height={size}>
    <use href={`${icons}#icon-${icon}`} />
  </svg>
);

IconsSvg.defaultProps = {
  size: 28,
  color: "#f5c7f7",
};

export default IconsSvg;
