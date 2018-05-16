import React, { Component } from 'react';

import $ from 'jquery';
import 'moment/min/moment.min.js';

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import 'fullcalendar/dist/gcal.js';


class Calendar extends React.Component {
  render() {
    return <div id="fullcalendar"></div>;
  }
  componentDidMount() {
    $('#fullcalendar').fullCalendar({
		header: {
			left: 'title',
			center: '',
			right: 'prev, next, today'
		},
		defaultView: 'listMonth',
		googleCalendarApiKey: 'AIzaSyC53WWoglR4LXIVp4Uv5wLpt7EM0wTCzsA',
		events: {
	      googleCalendarId: 'equ413pi1ejktmqetcrfcc48kc@group.calendar.google.com',
	      className: 'gcal-event' // an option!
	    },
	    contentHeight: 'auto',
	    noEventsMessage: 'No gigs this month.',
	    displayEventEnd: false,
	    eventColor: 'transparent'
    })
  }
}


class Shows extends Component {

	  render() {
	    return (
	      <div className="page-wrapper shows">
        	<div className="site-wrapper">
	          <div className="site-limit">
	            <h1>Shows</h1>
		        <Calendar />
	          </div>
	        </div>
	      </div>
	    );
	  }
}

export default Shows;


