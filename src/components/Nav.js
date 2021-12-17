import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

function Nav() {
  return (
    <nav className="nav fade-in-top">
      <NavLink to="/" className="nav__logo"><img src={logo} alt="Our logo"/></NavLink>
      <NavLink to="/" className={({isActive}) =>
        "nav__link" + (isActive ? " nav__link--active" : "")
      }>Home</NavLink>
    </nav>
  );
}

export default Nav;