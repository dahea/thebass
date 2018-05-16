import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  componentDidMount(){
    const navToggleButton = document.querySelector('.nav-toggle');
    const navItems = document.querySelectorAll('.main-nav-wrapper .nav-item');
    const pageBody = document.querySelector('#root');

    function navToggle() {
      if ( window.innerWidth <= 900) {      
        navToggleButton.classList.toggle('active');
        const navBar = document.querySelector('.main-nav-wrapper');
        navBar.classList.toggle('active');
        pageBody.classList.toggle('fixed');
      } 
    }

    navToggleButton.addEventListener('click', navToggle);
    navItems.forEach(navItem => navItem.addEventListener('click', navToggle));
    
  }

  render() {
    return (
      <nav className="site-wrapper">
        <div className="site-limit flush">
        	<NavLink to="/" className="nav-item dahea">DaHea An | bassist</NavLink>
          <div className="nav-toggle">
            <div className="nav-line left"></div>
            <div className="nav-line right"></div>
          </div>
          <div className="main-nav-wrapper">
            <NavLink to="/About" activeClassName="active" className="nav-item">about</NavLink>
            <NavLink to="/Shows" activeClassName="active" className="nav-item">shows</NavLink>
            <NavLink to="/Projects" activeClassName="active" className="nav-item">projects</NavLink>
            <NavLink to="/Photos" activeClassName="active" className="nav-item">photos</NavLink>
            <a href="#contact" className="nav-item">contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;


