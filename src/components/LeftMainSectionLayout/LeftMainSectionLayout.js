import React from 'react';
import Title from '../Title';

'use strict';

var LeftMainSectionLayout = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired/*,
		leftComponent: React.PropTypes.element,
		rightComponent: React.PropTypes.element*/
	},
	render: function() {
		return (<div id="page-container">
			<header>
			<Title title={this.props.title} />
			</header>
			<div id="content-container">
			<div id="left-container">
			{this.props.leftComponent}
			</div>
			<div id="right-container">
			{this.props.rightComponent}
			</div>
			</div>
			</div>);
	}     
});

export default LeftMainSectionLayout;