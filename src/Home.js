import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 
import video from './images/DaHea-Video-Web.mp4';

class Home extends Component {

	componentDidMount() {
	    setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper home">
        <video poster="./images/video-poster.jpg" id="bgvid" autoPlay muted loop playsInline >
          <source src={video} type="video/mp4"  />
        </video>
      </div>
    );
  }
}
export default Home;


