import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar bg-primary">
        <h1><i className="fab fa-github"></i> Github Finder</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navbar
