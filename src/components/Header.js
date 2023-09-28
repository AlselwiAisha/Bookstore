import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <nav className="nav">
    <h2>
      Bookstore CMS
    </h2>
    <ul>
      <li key="1" className="link">
        <NavLink className="navLink upper" to="/">Books</NavLink>
      </li>
      <li key="2" className="link">
        <NavLink className="navLink upper" to="/categories">Categories</NavLink>
      </li>
    </ul>

    <div className="Oval">
      <FaUser className="Mask" />
    </div>
  </nav>
);
export default NavBar;
