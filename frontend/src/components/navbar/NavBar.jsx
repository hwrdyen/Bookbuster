import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar__Container">
      <NavLink to={"/"} className="NavBar__LogoLink">
        Bookbuster
      </NavLink>
    </div>
  );
}

export default NavBar;
