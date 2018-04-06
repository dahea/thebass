import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 


class Shows extends Component {

	componentDidMount() {
	    setMinHeight();
	}

	  render() {
	    return (
	      <div className="page-wrapper shows">
	        <h1>Upcoming Shows</h1>
	        <div>
	        	do some kinda JSON parsing thing and show a table featuring:<br />
	        	date<br />
	        	venue<br />
	        	performing with
	        </div>

	        <div>
	        	retroactively show the old dates as well. not sure how you want to approach this
	        </div>
	      </div>
	    );
	  }
}

export default Shows;


