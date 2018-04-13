import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="site-wrapper">
        <div className="site-limit flush">
        	<NavLink to="/" className="nav-item dahea">DaHea An | bassist</NavLink>
          <NavLink to="/About" activeClassName="active" className="nav-item">about</NavLink>
          <NavLink to="/Shows" activeClassName="active" className="nav-item">shows</NavLink>
          <NavLink to="/Projects" activeClassName="active" className="nav-item">projects</NavLink>
          <NavLink to="/Photos" activeClassName="active" className="nav-item">photos</NavLink>
          <a href="#contact" className="nav-item">contact</a>
        </div>
      </nav>
    );
  }
}

export default Nav;


