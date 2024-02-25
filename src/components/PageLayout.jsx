import "../styles/PageLayout.css";
import logo from "../utilities/images/logo.png";
import Footer from "./Footer.jsx"

import { NavLink, Outlet } from "react-router-dom";
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
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
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
      <Footer/>
    </>
  );
};

export default PageLayout;
