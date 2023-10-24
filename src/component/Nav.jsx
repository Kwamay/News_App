import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';

const Nav = () => (
  <nav className="nav-container">
    <ul className="nav-ul">
      <h2 className="nav-logo">App Logo</h2>
      <li className="nav-li">
        <Link className="nav-link" to="/">Most View</Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/town">Town/City View</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
