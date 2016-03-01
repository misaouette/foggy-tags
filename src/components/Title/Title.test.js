'use strict';

import React from 'react';
import Title from '.';
import sd from 'skin-deep';


describe('Title', () => {
	const title = "Test Title";
	let tree;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(Title, {
			title: title
		}));
	});
	
	it("renders a h1", () => {
		const titleTree = tree.everySubTree('h1');
		expect(titleTree.length).toEqual(1);
	});

	it('renders the given title', () => {
		expect(tree.text()).toEqual(title);
	});
});