import React from 'react';

'use strict';

var Tag = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired,
		sentimentClass: React.PropTypes.string.isRequired,
		size: React.PropTypes.number,
		x: React.PropTypes.number, // computed by d3-cloud layout
		y: React.PropTypes.number, // computed by d3-cloud layout
		rotate: React.PropTypes.number,  // computed by d3-cloud layout
		onTagClick: React.PropTypes.func		
	},
	getDefaultProps: function() {
		return {
			label: '',
			sentimentClass: '',
			x: 0,
			y: 0,
			rotate: 0,
			onTagClick: () => {}
		};
	},
	render() {
		// Props x, y and rotate are computed by d3-cloud layout
		return ( <text className={`tag-in-cloud ${this.props.className}`}
			style={{ fontSize: this.props.size }}
			textAnchor="middle"
			transform={`translate(${this.props.x},${this.props.y})rotate(${this.props.rotate})`}
			onClick={ () => { this.props.onTagClick(this.props.text); } }> 
			{this.props.text} 
			</text> );
	}
});

export default Tag;