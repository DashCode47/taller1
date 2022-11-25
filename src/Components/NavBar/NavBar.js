import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-container">
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
      <div className="logo-container">
        <img src={require("../../assets/logo.png")} className="logo" />
        <h3 className="kruger">KrugerStar</h3>
      </div>

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
  );
};

export default NavBar;
