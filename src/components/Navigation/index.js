import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
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
