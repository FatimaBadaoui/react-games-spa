import { NavLink, Outlet } from "react-router-dom";
import "./PageLayout.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import User from "./User.jsx";

const PageLayout = () => {
  const { user } = useContext(UserContext);
  const isSelected = ({ isActive }) => {
    return isActive ? "nav-link selected" : "nav-link";
  };

  return (
    <>
      <header className="header">
        <div className="logo"></div>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className={isSelected}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className={isSelected}>
                Games
              </NavLink>
            </li>
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
            <li>
              <NavLink to="/support" className={isSelected}>
                Support
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={user ? "logout-container" : "login-container"}>
          {user ? (
            <User />
          ) : (
            <NavLink to="/login" className={isSelected}>
              Login
            </NavLink>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
