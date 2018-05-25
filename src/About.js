import React, { Component } from 'react';
import portrait from './images/dahea-portrait-medium.jpg'; 

class About extends Component {

  render() {
    return (
      <div className="page-wrapper about">
        <div className="site-wrapper">
          <div className="site-limit">
            <div className="offset-box-wrapper right bio">
              <div className="text-wrapper">
                <h2>
                  Providing bass all over the place...
                  <br />
                  <span>Tastefully.</span>
                </h2>
              	<p>DaHea An is a bassist and backup singer, currently residing in New York City.</p>
                <p>Her basslines deliver a catchy and driving groove that add a dynamic element to songs. Her basslines are melodic and punchy, filled with counter melodies that are heavily influenced by latin jazz, blues, and rock.</p>
                <p>A versatile musician, DaHea has played with bands ranging in genre, from alt-country band Karen & the Sorrows, to indie pop-punk band Castle Black, and most recently, acoustic-electric band, Hamin Reed.</p>
              </div>
              <div className="img-wrapper">
                <img src={portrait} alt="DaHea An - NYC based bassist" />
              </div>
            </div>
          </div>
        
          <div className="site-limit">
            <div className="offset-box-wrapper image-wide left gear">
              <div className="img-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCewbEVOkfNnDVQtSQb3W8jYHAO71egjpH22zJYuIZEs1c9KtOyQ" alt="DaHea An - NYC based bassist - home studio" />
              </div>
              <div className="text-wrapper">
                <h2>
                  Basses & amps
                </h2>
                <ul>
                  <li>Fender Precision Bass</li>
                  <li>Musicman Sterling Bass</li>
                  <li>Sendel Custom EUB</li>
                  <li>AcousticImage Focus2R amp head</li>
                  <li>GK115  bass cab</li>
                  <li>Fender Bassman 25 combo amp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;


