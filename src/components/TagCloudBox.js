import React from 'react';
import TagCloud from './TagCloud';
import DetailsBox from './TopicDetailsBox';
import Title from './Title';

'use strict';

var TagCloudBox = React.createClass({
	getInitialState: function() {
		return {
			topics: [],
			selectedTopicName: null
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

	handleClick: function(selectedTopicName) {		
		this.setState({
			selectedTopicName: selectedTopicName
		});
	},

	render: function() {
		var selectedTopic = null;
		var selectedTopics = this.state.topics.filter(topic => 
			topic.label === this.state.selectedTopicName);
		
		if (selectedTopics.length > 0) {
			selectedTopic = selectedTopics[0];
		}

		return <div>
		<Title name="My Topics Challenge" />
		<TagCloud tags={this.state.topics} onTagClick={this.handleClick}/>
		<DetailsBox topic={selectedTopic} />
		</div>;
	}     
});

export default TagCloudBox;