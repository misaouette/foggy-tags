import React from 'react';
import Title from '../Title';

'use strict';

const LeftMainSectionLayout = (props) => {
	return (<div className="page-container">
		<header>
		<Title title={props.title} />
		</header>
		<div className="content-container">
		<div className="left-container">
		{props.leftComponent}
		</div>
		<div className="right-container">
		{props.rightComponent}
		</div>
		</div>
		</div>);
};

LeftMainSectionLayout.propTypes = {
	title: React.PropTypes.string.isRequired,
	leftComponent: React.PropTypes.element,
	rightComponent: React.PropTypes.element
};

export default LeftMainSectionLayout;