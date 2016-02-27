import React from 'react';
import TagCloud from './TagCloud';
import DetailsBox from './TopicDetailsBox';
import Title from './Title';

'use strict';

var TagCloudBox = React.createClass({
	getInitialState: function() {
		return {
			topics: [],
			selectedTopic: null
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

	handleClick: function(selectedTopic) {		
		this.setState({
			selectedTopic: selectedTopic
		});
	},

	render: function() {
		return (<div id="page-container">
			<header>
			<Title name="My Topics Challenge" />
			</header>
			<div id="inner-container">
			<TagCloud topics={this.state.topics} onTagClick={this.handleClick}/>
			<DetailsBox topic={this.state.selectedTopic} />
			</div>
			</div>);
		}     
	});

	export default TagCloudBox;