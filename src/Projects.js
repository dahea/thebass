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
            <h1>my projects page</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;


