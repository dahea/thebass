import React, { Component } from 'react';

class Instagram extends Component {

  render() {

    return (
       <div className="instagram-feed site-wrapper">
          <h1 className="site-limit"><a href="http://www.instagram.com/an.amalgam" target="_blank" rel="noopener noreferrer">@an.amalgam</a> on Instagram:</h1>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
          <iframe src="//lightwidget.com/widgets/1600177f6a925d669d65748695deb664.html" scrolling="no" allowtransparency="true" className="lightwidget-widget site-limit"></iframe>
        </div>
    );
  }
}
export default Instagram;



