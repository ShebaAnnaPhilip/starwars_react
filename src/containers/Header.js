import { Link } from "react-router-dom";
import "./Header.css";
import homeIcon from '../images/homeIcon.png';
import backIcon from '../images/back.png';

function Header({back, showIcon}) {

  return (
    <div className="header">
      <Link to="/">
      <img className="home-icon" src={homeIcon} alt="Home" />
      </Link>
      {showIcon &&<img className="back-icon" src={backIcon} alt="Back" onClick={back}/>}
    </div>
  );
}

export default Header;
