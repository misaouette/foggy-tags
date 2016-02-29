import React from 'react';


'use strict';

var TagCloud = React.createClass({
	propTypes: {
		topics: React.PropTypes.array.isRequired,
		onTagClick: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			label: '',
			volumeClass: '',
			sentimentClass: '',
			onTagClick: () => {}
		};
	},
	render: function() {
		const maxVolume = Math.max.apply(Math, this.props.topics.map(topic => topic.volume)); 
		const minVolume = Math.min.apply(Math, this.props.topics.map(topic => topic.volume)); 
		const self = this;
		var tagNodes = this.props.topics.map(topic => {
			const tagVolume = topic.volume;
			const categoryRange = (maxVolume - minVolume)/6;
			const sentimentScore = topic.sentimentScore;

   		    // Computing volumeClass
   		    let volumeClass = '';
   		    for (let i = 0; i < 6; i+=1) {
   		    	if (tagVolume >= minVolume + i * categoryRange && tagVolume <= minVolume + (i+1)*categoryRange) {
   		    		volumeClass = 'volume' + i;
   		    		break;
   		    	}	
   		    }

		    // Computing sentimentClass
		    let sentimentClass = '';
		    if (sentimentScore > 60) {
		    	sentimentClass = 'positive-text';
		    } else if (sentimentScore < 40) {
		    	sentimentClass = 'negative-text';
		    } else {
		    	sentimentClass = 'neutral-text';
		    }

		    return (<Tag key={topic.id} label={topic.label}		    	
		    	volumeClass={volumeClass} sentimentClass={sentimentClass}
		    	onTagClick={self.props.onTagClick} />);
		});

		return <div>{tagNodes}</div>;	
	}     
});

var Tag = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired,
		volumeClass: React.PropTypes.string.isRequired,
		sentimentClass: React.PropTypes.string.isRequired,
		onTagClick: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			label: '',
			volumeClass: '',
			sentimentClass: '',
			onTagClick: () => {}
		};
	},
	render() {
		return ( <div className={`tag-in-cloud ${this.props.volumeClass} ${this.props.sentimentClass}`}
			onClick={ () => { this.props.onTagClick(this.props.label); } }> 
			{this.props.label} 
			</div> );
	}
});

export default TagCloud;
export {Tag};