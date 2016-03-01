/* jshint esversion: 6 */

import React from 'react';
import d3 from 'd3';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloud from '../TagCloud';
import TopicDetailsBox from '../TopicDetailsBox';

'use strict';

var TopicCloudPage = React.createClass({

	propTypes: { source: React.PropTypes.string.isRequired },

	getInitialState: function() {
		return {
			topics: [],
			tagsHaveUpdated: false,
			selectedTopicLabel: null
		};
	},

	__fetchData: function() {
		this.serverRequest = d3.json(this.props.source, function(error, result) {
			this.setState({
				topics: result.topics,
				tagsHaveUpdated: true
			});
		}.bind(this));

	},

	componentDidMount: function() {
		this.__fetchData();	
		// we would probably initialise our web socket here if needed
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	changeTopicSelectionOnClick: function(selectedTopicLabel) {
		this.setState({
			selectedTopicLabel: selectedTopicLabel,
			tagsHaveUpdated: false
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
			tags: this.state.topics.map(topic => {
				return {
					text: topic.label,
					size: ~~Math.sqrt(topic.volume)*8,
					className: this.__getSentimentClass(topic),
					onTagClick: this.changeTopicSelectionOnClick
				};
			}),
			tagsHaveUpdated: this.state.tagsHaveUpdated
		});
		
		let selectedTopic = null;
		if (this.state.selectedTopicLabel !== null) {
			selectedTopic = this.state.topics.filter(topic => {
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