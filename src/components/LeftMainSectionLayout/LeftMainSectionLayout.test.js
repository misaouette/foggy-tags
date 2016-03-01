'use strict';

import React from 'react';
import LeftMainSectionLayout from '.';
import sd from 'skin-deep';

describe('LeftMainSectionLayout', () => {
	const title = "Test Title";

	class MockedSubComponent1 extends React.Component {
		render () {
			return <div></div>;
		}
	}

	class MockedSubComponent2 extends React.Component {
		render () {
			return <div></div>;
		}
	}
	let tree;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(LeftMainSectionLayout, {
			title: title,
			leftComponent: React.createElement(MockedSubComponent1),
			rightComponent: React.createElement(MockedSubComponent2)
		}));
	});
	
	it("renders a Title component", () => {
		const titleTree = tree.everySubTree('Title');
		expect(titleTree.length).toEqual(1);
		expect(titleTree[0].getRenderOutput().props.title).toEqual(title);
	});

	it("renders a MockedSubComponent1 component", () => {		
		const subcomponent = tree.everySubTree('MockedSubComponent1');
		expect(subcomponent.length).toEqual(1);
	});

	it("renders a MockedSubComponent2 component", () => {		
		const subcomponent = tree.everySubTree('MockedSubComponent2');
		expect(subcomponent.length).toEqual(1);
	});
});