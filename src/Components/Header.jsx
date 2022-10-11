import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon className="header__icon" icon={faEarthAmericas} />
      <p className="header__text">my travel journal.</p>
    </header>
  );
};

export default Header;
