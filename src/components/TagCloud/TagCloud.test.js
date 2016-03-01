'use strict';

import React from 'react';
import TagCloud from '.';
import sd from 'skin-deep';


describe('TagCloud', () => {
	const tags = [{
		text: 'London',
		size: 10,
		className: 'positive-text'
	}, {
		text: 'Berlin',
		size: 14,
		className: 'neutral-text'
	}];
	let tree, tagComponents;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TagCloud, {tags: tags}));
		tagComponents = tree.everySubTree('Tag');		
	});


	it("renders all tag texts", () => {
		const texts = tags.map(tag => tag.text);
		texts.forEach(text => {
			expect(tagComponents.map(tag => tag.props.text)).toContain(text);
		});
	});
});

