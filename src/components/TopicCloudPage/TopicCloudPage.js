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
			topicsHaveUpdated: false,
			selectedTopicLabel: null
		};
	},

	__fetchData: function() {

			console.log(this.props.source);
		this.serverRequest = d3.json(this.props.source, function(error, result) {
			console.log(this.props.source);
			console.log(result.topics);
			this.setState({
				topics: result.topics,
				topicsHaveUpdated: true
			});
		}.bind(this));

	},

	componentDidMount: function() {
		this.__fetchData();	
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	changeTopicSelectionOnClick: function(selectedTopicLabel) {
		this.setState({
			selectedTopicLabel: selectedTopicLabel,
			topicsHaveUpdated: false
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
			topicsHaveUpdated: this.state.topicsHaveUpdated
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