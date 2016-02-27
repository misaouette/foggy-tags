import React from 'react';


'use strict';

var TagCloud = React.createClass({
	render: function() {
		var tagNodes = this.props.tags.map(topic =>
			(<Tag key={topic.id} onTagClick={this.props.onTagClick}>
				{topic.label}
			</Tag>)
			);
		return <div className="tag-list" >
		    {tagNodes}
			</div>;
	}     
});

var Tag = React.createClass({
    render() {
    	return ( <div className="tag-in-cloud" onClick={ x => this.props.onTagClick(this.props.children)}> 
    		{this.props.children} 
    		</div> );
    }
});
export default TagCloud;