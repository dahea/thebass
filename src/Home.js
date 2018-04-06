import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Home extends Component {

	componentDidMount() {
	    setMinHeight();
	}



  render() {
    return (
      <div className="page-wrapper home">
        my home page
      </div>
    );
  }
}

export default Home;


