import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Projects extends Component {

	componentDidMount() {
	    //setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper projects">
        <div className="site-wrapper">
          <div className="site-limit">
            <div className="project-item">
              <h4>Karen &amp; the Sorrows</h4>
              <div className="video-container"><iframe src="https://www.youtube.com/embed/videoseries?list=PLUA9TsgVnchR8yuQKpUU4K1lPbwScc7Uk" width="660" height="371" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
            </div>
            <div className="project-item">
              <h4>Bunny Punch</h4>
              <div className="video-container"><iframe src="https://www.youtube.com/embed/videoseries?list=PLUA9TsgVnchT5PSD2yr8gXQt0DD6LkDOu" width="660" height="371" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></div>
            </div>
            <div className="project-item">
              <h4>Hamin Reed</h4>
              <div className="video-container"><iframe src="https://www.youtube.com/embed/videoseries?list=PLUA9TsgVnchTZIenyVyLrFOOkq8WEYEB6" width="660" height="371" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
            </div>
            <div className="project-item">
              <h4>Dark Moon Apache</h4>
              <div className="video-container"><iframe src="https://www.youtube.com/embed/videoseries?list=PL_dSFTwMu3Ydtgyqd-nIt4z6I2b6E__ZS" width="660" height="371" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
            </div>
            <div className="project-item">
              <h4>The Outer Rings</h4>
              <div className="video-container"><iframe src="https://www.youtube.com/embed/VIVtYad-eEY?feature=oembed" width="660" height="495" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
            </div>
            <div className="project-item">
              <h4>Joshua Sells</h4>
              <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/373987418&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;


