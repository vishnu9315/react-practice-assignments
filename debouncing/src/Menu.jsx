import "./styles.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="about"> About </Link>
        </li>
        <li> </li>
        <li> </li>
      </ul>
    </div>
  );
}
