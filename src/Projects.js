import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Projects extends Component {

	componentDidMount() {
	    setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper projects">
        my projects page
      </div>
    );
  }
}

export default Projects;


