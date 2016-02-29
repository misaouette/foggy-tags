import React from 'react';
import TagCloud from '../TagCloud';

var TagCloudContainer = React.createClass({
	propTypes: {
		topics: React.PropTypes.array.isRequired,
		onTagClick: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			topics: [],
			onTagClick: () => {}
		};
	},

	shouldComponentUpdate: function(nextProps) {
		if (nextProps.topicsHaveUpdated === undefined) return true;
		return nextProps.topicsHaveUpdated;
	},

	getVolumeClass: function(tagVolume, minVolume, categoryRange) {
		let volumeClass = '';

		for (let i = 0; i < 6; i+=1) {
			if (tagVolume >= minVolume + i * categoryRange && tagVolume <= minVolume + (i+1)*categoryRange) {
				volumeClass = 'volume' + i;
				break;
			}	
		}
		return volumeClass;
	},

	getSentimentClass: function(topic) {
		const sentimentScore = topic.sentimentScore;
		let sentimentClass = '';

		if (sentimentScore > 60) {
			sentimentClass = 'positive-text';
		} else if (sentimentScore < 40) {
			sentimentClass = 'negative-text';
		} else {
			sentimentClass = 'neutral-text';
		}
		return sentimentClass;
	},

	render: function() {

		let maxVolume = Math.max.apply(Math, this.props.topics.map(topic => topic.volume));
		let minVolume = Math.min.apply(Math, this.props.topics.map(topic => topic.volume)); 
		let categoryRange = (maxVolume - minVolume)/6;

		var tags = this.props.topics.map(topic => {
			return {
				id: topic.id,
				label: topic.label,
				sentimentClass: this.getSentimentClass(topic),
				volumeClass: this.getVolumeClass(topic.volume, minVolume, categoryRange),
				onTagClick: this.props.onTagClick,
				size: Math.sqrt(topic.volume)
			};
		});
		return (<TagCloud tags={tags}/>);
	}
});

export default TagCloudContainer;
