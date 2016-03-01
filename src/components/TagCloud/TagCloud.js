import React from 'react';
import ReactDOM from 'react-dom';
import cloud from 'd3-cloud';
import Tag from './Tag';

var TagCloud = React.createClass({
	font: 'Arial',
	propTypes: {
		tags: React.PropTypes.array.isRequired,
		onTagClick: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			tags: [],
			onTagClick: () => {}
		};
	},

	getInitialState: function () {
		var svgWidth = 700;
		var svgHeight = 400; 
		var layout = cloud().size([svgWidth, svgHeight])
		.fontSize(d => d.size)
		.font(this.font)  //WARNING: needs to specify a font, otherwise memory leak!!!!
		.rotate(0);
//		.rotate(function() { return ~~(Math.random() * 2) * 90; });

return {
	svgWidth: svgWidth,
	svgHeight: svgHeight,
	layout: layout,
	tags: null
};
},

__computeLayout: function(newTags) {
	const tags = newTags || this.props.tags;
	this.state.layout.words(tags).start();
},

componentWillMount: function() {
	this.__computeLayout();	
},

componentWillUpdate: function(nextProps) {
	this.__computeLayout(nextProps.tags);
},

componentWillUnmount: function() {
	var el = ReactDOM.findDOMNode(this);
	this.state.layout.destroy(el);
},

drawTags: function () {
	var self = this;
	return this.props.tags.map(function (tag, index) {
		tag.font = self.font;
		return (<Tag key={tag.key} {...tag} />);
	});
},
render: function() {
	return (<div>
		<svg
		width={this.state.svgWidth}
		height={this.state.svgHeight}>
		<g transform= {`translate(${this.state.svgWidth/2},${this.state.svgHeight/2})`}>
		{this.drawTags()}
		</g>
		</svg>
		</div>
		);
}  
});

export default TagCloud;