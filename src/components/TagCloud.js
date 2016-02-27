import React from 'react';


'use strict';

var TagCloud = React.createClass({
	render: function() {
		var maxVolume = Math.max.apply(Math, this.props.topics.map(topic => topic.volume)); 
		var minVolume = Math.min.apply(Math, this.props.topics.map(topic => topic.volume)); 
		
		var tagNodes = this.props.topics.map(topic =>
			(<Tag key={topic.id} topic={topic} 
				maxVolume={maxVolume} minVolume={minVolume} 
				onTagClick={this.props.onTagClick} />)
			);
		return <div id="tag-cloud-box" >
		{tagNodes}
		</div>;
	}     
});

var Tag = React.createClass({
	render() {
		const tagVolume = this.props.topic.volume;
		const maxVolume = this.props.maxVolume;
		const minVolume = this.props.minVolume;
		const categoryRange = (maxVolume - minVolume)/6;
		const sentimentScore = this.props.topic.sentimentScore;

		var volumeClass = '';
		var sentimentClass = 'neutral-text';		

		// Computing volumeClass
		for (var i = 0; i < 6; i+=1) {
			if (tagVolume >= minVolume + i * categoryRange && tagVolume <= minVolume + (i+1)*categoryRange) {
				volumeClass = 'volume' + i;
				break;
			}	
		}

		// Computing sentimentClass
		if (sentimentScore > 60) {
			sentimentClass = 'positive-text';
		} else if (sentimentScore < 40) {
			sentimentClass = 'negative-text';
		}

		return ( <div className={`tag-in-cloud ${volumeClass} ${sentimentClass}`}
			onClick={ x => this.props.onTagClick(this.props.topic)}> 
			{this.props.topic.label} 
			</div> );
	}
});

export default TagCloud;