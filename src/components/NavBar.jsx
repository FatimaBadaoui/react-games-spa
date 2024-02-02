import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLogged }) => {
  const isSelected = ({ isActive }) => {
    return isActive ? "nav-link selected" : "nav-link";
  };

  return (
    <ul className="nav">
      <li>
        <NavLink to="/" className={isSelected}>
          Home
        </NavLink>
      </li>
      {isLogged && (
        <li>
          <NavLink to="/games" className={isSelected}>
            Games
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about" className={isSelected}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={isSelected}>
          Contact
        </NavLink>
      </li>
      {!isLogged && (
        <li>
          <NavLink to="/login" className={isSelected}>
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
