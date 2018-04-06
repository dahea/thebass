import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
      	<NavLink to="/" className="nav-item dahea">DaHea An | bass player</NavLink>
        <NavLink to="/About" activeClassName="active" className="nav-item">about</NavLink>
        <NavLink to="/Shows" activeClassName="active" className="nav-item">shows</NavLink>
        <NavLink to="/Projects" activeClassName="active" className="nav-item">projects</NavLink>
        <NavLink to="/Photos" activeClassName="active" className="nav-item">photos</NavLink>
      </nav>
    );
  }
}

export default Nav;


