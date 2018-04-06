import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class About extends Component {

	componentDidMount() {
	    setMinHeight();
	}


  render() {
    return (
      <div className="page-wrapper about">

        <div className="bio">
        	here is my insta sfeed
        </div>

        <div className="gear">
        	here is a writeup of my current gear
        </div>

        <div className="instagram-feed">
        	here is my insta sfeed
        </div>
      </div>
    );
  }
}

export default About;


