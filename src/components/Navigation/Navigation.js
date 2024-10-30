import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/mixcloud">MixCloud</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
