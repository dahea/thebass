import React, { Component } from 'react';
import { BrowserRouter as SiteRouter, Link, Route } from 'react-router-dom';

import './App.css';
import Nav from './Nav'; 
import Home from './Home' ;
import About from './About' ;
import Shows from './Shows' ;
import Projects from './Projects' ;
import Photos from './Photos' ;
import Contact from './Contact' ;

class App extends Component {

  componentDidMount() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const appPage = document.querySelector('.page-wrapper');
    console.log(appPage);
    if(!appPage) return;
    appPage.style.minHeight = window.innerHeight - navHeight + 'px';
}

  render() {

    return (
      <SiteRouter>
        <div className="site-wrapper">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/Shows" component={Shows} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          {/*
            <Route path="/About" component={About} />
            <Route path="/Photos" component={Photos} />
          */}
        </div>
      </SiteRouter>
    );
  }
}

export default App;
