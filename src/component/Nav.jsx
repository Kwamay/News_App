import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';
import { GiNewspaper } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Nav = () => (
  <nav className="nav-container">
    <Link className="nav-back" to="/">
      <MdOutlineArrowBackIosNew />
    </Link>
    <h2 className="nav-logo">World News</h2>
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link" to="/">
          <GiNewspaper />
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/details">
          <IoSettingsOutline />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
