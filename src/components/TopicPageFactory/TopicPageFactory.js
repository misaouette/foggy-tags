import React from 'react';
import d3 from 'd3';

'use strict';

var TopicPageFactory = React.createClass({

	propTypes: { 
		source: React.PropTypes.string.isRequired,
		reactComponent: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			topics: []
		};
	},

	__fetchData: function () {
		this.serverRequest = d3.json(this.props.source, function(error, result) {
			this.setState({
				topics: result.topics
			});
		}.bind(this));
	},

	componentDidMount: function() {		
        this.__fetchData();

        // This would be where to initialise Web Socket if needed 
        /* setInterval(function () {
        	this.__fetchData();
        }.bind(this), 5000); */
    },

    componentWillUnmount: function() {
    	this.serverRequest.abort();
    },

    render: function () {
    	return React.createElement(this.props.reactComponent, {topics: this.state.topics});
    }
});

export default TopicPageFactory;