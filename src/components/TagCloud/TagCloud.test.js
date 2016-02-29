'use strict';

import React from 'react';
import TagCloud from '.';
import sd from 'skin-deep';


describe('TagCloud', () => {
	const tags = [{
		id: '1',
		label: 'London',
		sentimentClass: 'neutral-text',
		onTagClick: () => {},
		x: 0,
		y: 0,
		rotate:0
	}, {
		id: '2',
		label: 'Berlin',
		sentimentClass: 'positive-text',
		onTagClick: () => {},
		x: 0,
		y: 0,
		rotate: 90
	}];
	let tree, tagComponents;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TagCloud, {tags: tags}));
		tagComponents = tree.everySubTree('Tag');
	});


	it("renders all tag labels", () => {
		const labels = tags.map(tag => tag.label);
		labels.forEach(label => {
			expect(tagComponents.map(tag => tag.props.label)).toContain(label);
		});
	});

});

