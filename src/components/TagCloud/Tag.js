import React from 'react';

'use strict';

var Tag = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired,
		sentimentClass: React.PropTypes.string.isRequired,
		x: React.PropTypes.number,
		y: React.PropTypes.number,
		rotate: React.PropTypes.number,
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
		return ( <text className={`tag-in-cloud ${this.props.sentimentClass}`}
			style={{ fontSize: this.props.size, fontFamily: this.props.font }}
			textAnchor="middle"
			transform={`translate(${this.props.x},${this.props.y})rotate(${this.props.rotate})`}
			onClick={ () => { this.props.onTagClick(this.props.label); } }> 
			{this.props.label} 
			</text> );
	}
});

export default Tag;