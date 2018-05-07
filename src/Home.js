import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Home extends Component {

	componentDidMount() {
	    setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper home">
        <video poster="./images/home-bg.jpg" id="bgvid" autoPlay muted loop>
          <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"  />
          <source src="http://clips.vorwaerts-gmbh.de/VfE.webm"      type="video/webm" />
          <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv"       type="video/ogg"  />
        </video>
      </div>
    );
  }
}

export default Home;


