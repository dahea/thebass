import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class About extends Component {

	componentDidMount() {
	    // setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper about">
        <div className="banner site-wrapper"></div>
        <div className="bio site-wrapper">
          <div className="site-limit">
            <h1>Bio</h1>
          	<p>DaHea An is a bassist and backup singer, currently residing in New York City.</p>
            <p>Her basslines deliver a catchy and driving groove that add a dynamic element to songs. Her basslines are melodic and punchy, filled with counter melodies that are heavily influenced by latin jazz, blues, and rock.</p>
            <p>A versatile musician, DaHea has played with bands ranging in genre, from alt-country band Karen & the Sorrows, to indie pop-punk band Castle Black, and most recently, acoustic-electric band, Hamin Reed.</p>
          </div>
        </div>

        <div className="gear site-wrapper">
          <div className="site-limit">
            <h1>Gear</h1>
            <p>Basses</p>
            <ul>
              <li>Fender Precision Bass</li>
              <li>Musicman Sterling Bass</li>
              <li>Sendel Custom EUB</li>
            </ul>
            <p>Amps</p>
            <ul>
              <li>AcousticImage Focus2R amp head</li>
              <li>GK115  bass cab</li>
              <li>Fender Bassman 25 combo amp</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;


