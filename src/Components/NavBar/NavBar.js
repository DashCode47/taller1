import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <GiHamburgerMenu
        onClick={handleToggle}
        size={24}
        color="black"
        className="burger"
      />

      <div
        className={handleToggle ? "open" : "closed"}
        style={{ display: !navbarOpen ? "none" : "flex" }}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "links")}
          active
        >
          Home
        </NavLink>
        <NavLink to={"/imc"} className="links">
          IMG Calculator
        </NavLink>
        <NavLink to={"/age"} className="links">
          Age Calculator
        </NavLink>
        <NavLink to={"/"} className="logo-container krug">
          <img src={require("../../assets/logo.png")} className="logo" />
          <h3>KrugerStar</h3>
        </NavLink>

        <NavLink to={"./clock"} className="links">
          My CLock
        </NavLink>
        <NavLink to={"/about"} className="links">
          About Me
        </NavLink>
        <NavLink to={"/contact"} className="links">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
