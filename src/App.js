import React, { Component } from 'react';
import { BrowserRouter as SiteRouter, Route } from 'react-router-dom';

import './styles/App.less';
import Nav from './Nav'; 
import Instagram from './Instagram' ;
import Footer from './footer'; 

import Home from './Home' ;
import About from './About' ;
import Shows from './Shows' ;
import Projects from './Projects' ;
import Photos from './Photos' ;

class App extends Component {

  render() {

    return (
      <SiteRouter basename="thebass">
        <div className="site-wrapper">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shows" component={Shows} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Photos" component={Photos} />
          <Instagram />
          <Footer />
        </div>
      </SiteRouter>
    );
  }
}

export default App;
