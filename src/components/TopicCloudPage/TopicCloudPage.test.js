'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TopicCloudPage from '.';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloud from '../TagCloud';
import TopicDetailsBox from '../TopicDetailsBox';
import sd from 'skin-deep';

/* Testing structure */

describe('TopicCloudPage', () => {
	const source = "data/topics.json";
	let tree;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TopicCloudPage, {source:source}));
	});


	it("renders as a LeftMainSectionLayout", () => {
		const componentTrees = tree.everySubTree('LeftMainSectionLayout');
		expect(componentTrees.length).toEqual(1);
	});

	it("renders a TagCloud component", () => {		
		const componentTree = tree.dive(['LeftMainSectionLayout','TagCloudContainer','TagCloud']);
		const isTagCloudComponent = ReactTestUtils.isCompositeComponentWithType(
			componentTree.getMountedInstance(),
			TagCloud
			);
		expect(isTagCloudComponent).toBeTruthy;
	});

	it("renders a TopicDetailsBox", () => {
		const componentTree = tree.dive(['LeftMainSectionLayout', 'TopicDetailsBox']);
		const isTopicDetailsBoxComponent = ReactTestUtils.isCompositeComponentWithType(
			componentTree.getMountedInstance(),
			TopicDetailsBox
			);
		expect(isTopicDetailsBoxComponent).toBeTruthy;
	});
});

/* Testing behaviour */
describe('changeTopicSelectionOnClick method', () => {
	const source = 'data/topics.json';
	let tree, topicCloudPageElement;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TopicCloudPage, {source:source,}));
	});

	it('should modify the `selectedTopic` state property', () => {
		const mockTopicLabel = 'mock topic';		
		const instance = tree.getMountedInstance();

		instance.changeTopicSelectionOnClick(mockTopicLabel);

		expect(instance.state.selectedTopicLabel).toEqual(mockTopicLabel);
	});
});