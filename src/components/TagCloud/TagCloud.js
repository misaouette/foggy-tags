import React from 'react';
import ReactDOM from 'react-dom';
import cloud from 'd3-cloud';
import Tag from './Tag';

var TagCloud = React.createClass({
	propTypes: {
		tags: React.PropTypes.array.isRequired,
		font: React.PropTypes.string,
		svgWidth: React.PropTypes.number,
		svgHeight: React.PropTypes.number,
		tagsHaveUpdated: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			tags: [],
			font: 'Arial',
			svgWidth: 700,
			svgHeight: 400,
			tagsHaveUpdated: true
		};
	},

    // unsure whether layout can live as an attribute but it seems to be working
    // state would probably be wrong
    layout: null,

    shouldComponentUpdate: function(nextProps) {
    	return nextProps.tagsHaveUpdated;
    },

    __computeLayout: function(newtags) {
    	const tags = newtags || this.props.tags;
    	this.layout.words(tags).start();
    },

    componentWillMount: function() {
    	this.layout = cloud().size([this.props.svgWidth, this.props.svgHeight])
    	.fontSize(d => d.size)
	    .font(this.props.font)  //WARNING: needs to specify a font, otherwise memory leak!!!!
	    .rotate(0);
	    //.rotate(function() { return ~~(Math.random() * 2) * 90; });

	    this.__computeLayout();	
	},

	componentWillUpdate: function(nextProps) {
		this.__computeLayout(nextProps.tags);
	},

	componentWillUnmount: function() {
		var el = ReactDOM.findDOMNode(this);
		this.layout.destroy(el);
	},

	drawtags: function () {
		var self = this;
		return this.props.tags.map(function (topic, index) {
			return (<Tag key={topic.text} {...topic}/>);
		});
	},

	render: function() {
		return (<div>
			<svg
			width={this.props.svgWidth}
			height={this.props.svgHeight}>
			<g transform= {`translate(${this.props.svgWidth/2},${this.props.svgHeight/2})`}>
			{this.drawtags()}
			</g>
			</svg>
			</div>
			);
	}  
});

export default TagCloud;