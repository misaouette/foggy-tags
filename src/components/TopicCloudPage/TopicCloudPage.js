import React from 'react';
import d3 from 'd3';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloud from '../TagCloud';
import TopicDetailsBox from '../TopicDetailsBox';

'use strict';

var TopicCloudPage = React.createClass({

	propTypes: { 
		topics: React.PropTypes.array.isRequired 
	},

	getInitialState: function() {
		return {
			selectedTopicLabel: null,
			shouldTagCloudUpdate: true
		};
	},

	changeTopicSelectionOnClick: function(selectedTopicLabel) {
		this.setState({
			selectedTopicLabel: selectedTopicLabel,
			shouldTagCloudUpdate: false
		});
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({
			selectedTopicLabel: null,
			shouldTagCloudUpdate: true
		});
	},

	__getSentimentClass: function(topic) {
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
		const tagCloud = React.createElement(TagCloud, {
			tags: this.props.topics.map(topic => {
				return {
					text: topic.label,
					size: ~~Math.sqrt(topic.volume)*8,
					className: this.__getSentimentClass(topic),
					onTagClick: this.changeTopicSelectionOnClick
				};
			}),
			shouldTagCloudUpdate: this.state.shouldTagCloudUpdate
		});
		
		let selectedTopic = null;
		if (this.state.selectedTopicLabel !== null) {
			selectedTopic = this.props.topics.filter(topic => {
//				console.log('in render '+ topic.label);
				return (topic.label === this.state.selectedTopicLabel);
			}).shift();
		};

		const topicDetailsBox = React.createElement(TopicDetailsBox, {
			topic: selectedTopic
		});

		return (<LeftMainSectionLayout title="My Topics Challenge"
			leftComponent={tagCloud}
			rightComponent={topicDetailsBox} />);
	}     
});

export default TopicCloudPage;