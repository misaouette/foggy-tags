import React from 'react';

'use strict';

var Tag = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired,
		size: React.PropTypes.number.isRequired,
		x: React.PropTypes.number.isRequired, // computed by d3-cloud layout
		y: React.PropTypes.number.isRequired, // computed by d3-cloud layout
		rotate: React.PropTypes.number.isRequired,  // computed by d3-cloud layout
		className: React.PropTypes.string,
		onTagClick: React.PropTypes.func		
	},
	getDefaultProps: function() {
		return {
			text: null,
			size: null,
			x: null,
			y: null,
			rotate: null,
			className: '',
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