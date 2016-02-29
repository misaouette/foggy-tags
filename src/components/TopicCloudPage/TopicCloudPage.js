/* jshint esversion: 6 */

import React from 'react';
import d3 from 'd3';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloudContainer from '../TagCloudContainer';
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
		this.serverRequest = d3.json(this.props.source, function(error, result) {
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

	render: function() {
		const tagCloudContainer = React.createElement(TagCloudContainer, {
			topics: this.state.topics,
			onTagClick: this.changeTopicSelectionOnClick,
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
			leftComponent={tagCloudContainer}
			rightComponent={topicDetailsBox} />);
	}     
});

export default TopicCloudPage;