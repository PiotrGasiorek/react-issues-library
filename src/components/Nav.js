import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo"><img src={logo} alt="Our logo"/></NavLink>
      <NavLink to="/" className="nav__link">Home</NavLink>
    </nav>
  );
}

export default Nav;