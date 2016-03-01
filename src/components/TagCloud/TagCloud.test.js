'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';

import TagCloud from '.';


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
//		tree = sd.shallowRender(React.createElement(TagCloud, {tags: tags}));
//		tagComponents = tree.everySubTree('Tag');
});

	/* Testing structure */

	it("renders all tag texts", () => {
		tree = sd.shallowRender(React.createElement(TagCloud, {tags: tags}));
		tagComponents = tree.everySubTree('Tag');

		const texts = tags.map(tag => tag.text);
		texts.forEach(text => {
			expect(tagComponents.map(tag => tag.props.text)).toContain(text);
		});
	});

});

