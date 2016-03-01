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
		var tags = this.props.topics.map(topic => {
			return {
				id: topic.id,
				label: topic.label,
				sentimentClass: this.getSentimentClass(topic),
				onTagClick: this.props.onTagClick,
				text: topic.label,
				size: ~~Math.sqrt(topic.volume)*8
			};
		});
		return (<TagCloud tags={tags}/>);
	}
});

export default TagCloudContainer;
