import React, { Component } from 'react';
import { BrowserRouter as SiteRouter, Link, Route } from 'react-router-dom';

import './App.less';
import Nav from './Nav'; 
import Footer from './footer'; 
import Home from './Home' ;
import About from './About' ;
import Shows from './Shows' ;
import Projects from './Projects' ;
import Photos from './Photos' ;

class App extends Component {

  render() {

    return (
      <SiteRouter>
        <div className="site-wrapper">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shows" component={Shows} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Photos" component={Photos} />
          <Footer />
        </div>
      </SiteRouter>
    );
  }
}

export default App;
