import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Photos extends Component {
	componentDidMount() {
	    setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper photos">
        my gallery page
      </div>
    );
  }
}

export default Photos;


