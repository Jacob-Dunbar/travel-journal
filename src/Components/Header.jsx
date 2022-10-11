import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faEarthAmericas} />
      <p className="header-text">my travel journal.</p>
    </header>
  );
};

export default Header;
