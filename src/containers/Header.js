import { Link } from "react-router-dom";
import "./Header.css";
import homeIcon from '../images/homeIcon.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
      <img className="home-icon" src={homeIcon} alt="Home" />
      </Link>
    </div>
  );
}

export default Header;
