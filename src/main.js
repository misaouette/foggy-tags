// main.js
import React from 'react'
import ReactDOM from 'react-dom'

import TagCloudBox from './components/TagCloudBox'

ReactDOM.render(
	<TagCloudBox source="data/topics.json"/>,
	document.getElementById('tagcloud')
	);
	
