import React from 'react';


'use strict';

var TopicDetailsBox = React.createClass({
	render() {		
		var topic = this.props.topic;

		if (topic === null) { return (<div/>); }
        
        return (<div className="topic-details-box" >
                 <div> Information on topic "<span className="label">{topic.label}</span>" </div>
                 <br/>
                 <div> Total Mentions: <span className="volume">{topic.volume}</span></div> 
                 <br/>
                 <div> Positive Mentions: <span className="positive-text">{topic.sentiment.positive|0}</span></div>
                 <div> Neutral Mentions: <span className="neutral-text">{topic.sentiment.neutral|0}</span></div>
                 <div> Negative Mentions: <span className="negative-text">{topic.sentiment.negative|0}</span></div>
               </div>);
    }     
});

export default TopicDetailsBox;