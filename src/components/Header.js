import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <h2>
      Bookstore
    </h2>
    <ul>
      <li key="1" className="link">
        <NavLink className="navLink" to="/">Books</NavLink>
      </li>
      <li key="2" className="link">
        <NavLink className="navLink" to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);
export default NavBar;
