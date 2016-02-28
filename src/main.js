// main.js
import React from 'react';
import ReactDOM from 'react-dom';

import TopicCloudPage from './components/TopicCloudPage';

ReactDOM.render(
	<TopicCloudPage source="data/topics.json"/>,
	document.getElementById('main')
	);
	
