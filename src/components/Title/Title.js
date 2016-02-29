import React from 'react';


const Title = (props) => {
	return <h1 className="title">
	{props.title}
	</h1>;
};   

Title.propTypes = { title: React.PropTypes.string.isRequired };

export default Title;