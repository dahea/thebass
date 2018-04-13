import React, { Component } from 'react';
import {setMinHeight} from './helpers'; 

class Photos extends Component {
	componentDidMount() {
	    //setMinHeight();
	}

  render() {
    return (
      <div className="page-wrapper photos">
        <div className="site-wrapper">
            <div className="site-limit">
              <h1>Gallery</h1>
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
          </div>
      </div>
    );
  }
}

export default Photos;


