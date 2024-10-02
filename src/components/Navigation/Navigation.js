import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <ul className="navigation-block">
      <li className="navigation-block-item">
        <Link to="/">Profile</Link>
      </li>
      <li className="navigation-block-item">
        <Link to="/mixcloud">MixCloud</Link>
      </li>
    </ul>
  );
}

export default Navigation;
