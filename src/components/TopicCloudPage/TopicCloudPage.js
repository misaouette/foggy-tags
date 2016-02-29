/* jshint esversion: 6 */

import React from 'react';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloud from '../TagCloud';
import TopicDetailsBox from '../TopicDetailsBox';

'use strict';

var TopicCloudPage = React.createClass({

	propTypes: { source: React.PropTypes.string.isRequired },

	getInitialState: function() {
		return {
			topics: [],
			selectedTopicLabel: null
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get(this.props.source, function (result) {
			this.setState({
				topics: result.topics
			});
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	changeTopicSelectionOnClick: function(selectedTopicLabel) {
		this.setState({
			selectedTopicLabel: selectedTopicLabel
		});
	},

	render: function() {
		const tagCloud = React.createElement(TagCloud, {
			topics: this.state.topics,
			onTagClick: this.changeTopicSelectionOnClick
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