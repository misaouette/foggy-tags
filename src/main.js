// main.js

import React from 'react';
import ReactDOM from 'react-dom';

import TopicPageFactory from './components/TopicPageFactory';
import TopicCloudPage from './components/TopicCloudPage';

ReactDOM.render(
	<TopicPageFactory source="data/topics.json" reactComponent={TopicCloudPage}/>,
	document.getElementById('main')
	);
	
