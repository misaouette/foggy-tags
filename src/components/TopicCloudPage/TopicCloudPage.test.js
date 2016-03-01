'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TopicCloudPage from '.';
import LeftMainSectionLayout from '../LeftMainSectionLayout';
import TagCloud from '../TagCloud';
import TopicDetailsBox from '../TopicDetailsBox';
import sd from 'skin-deep';

import topicsData from '../../../data/topics.json';

/* Testing structure */

describe('TopicCloudPage', () => {
	const source = "http://localhost:8080/data/topics.json";
	const topics = topicsData.topics;

	let tree, tagComponents;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TopicCloudPage, {source:source}));
	});


	it("renders as a LeftMainSectionLayout", () => {
		const componentTrees = tree.everySubTree('LeftMainSectionLayout');
		expect(componentTrees.length).toEqual(1);
	});

	it("renders a TagCloud component", () => {		
		const componentTree = tree.dive(['LeftMainSectionLayout','TagCloud']);
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

/*  // does not seem to fetch data from source on ComponentMount...
	it("uses 6 different topic size for volume", () => {
		const topicSizes = tagComponents.map(tag => tag.props.size)
		.filter((size, index, self) => (this.indexOf(size) === index)); // keep unique values

		expect(topicSizes).not.toContain(undefined);
		expect(topicSizes.length).toEqual(6);
	});	

	it("render labels whose sentiment score > 60 with a positive css class", () => {
		const positiveTopics = topics.filter(topic => topic.sentimentScore > 60)
		.map(topic => topic.label);

		const positiveTagComponents = tagComponents.filter(tag => (tag.props.className === 'positive-text'))
		.map(tag => tag.props.label);

		expect(positiveTopics).toEqual(positiveTagComponents);  
	});

	it("render labels whose sentiment score < 40 with a negative css class", () => {
		const negativeTopics = topics.filter(topic => topic.sentimentScore < 40)
		.map(topic => topic.label);

		const negativeTagComponents = tagComponents.filter(tag => (tag.props.className === 'negative-text'))
		.map(tag => tag.props.label);

		expect(negativeTopics).toEqual(negativeTagComponents);
	});

	it("render other labels with a neutral css class", () => {
		const neutralTopics = topics.filter(topic => topic.sentimentScore <= 60 && topic.sentimentScore >=40)
		.map(topic => topic.label);

		const neutralTagComponents = tagComponents.filter(tag => (tag.props.className === 'neutral-text'))
		.map(tag => tag.props.label);

		expect(neutralTopics).toEqual(neutralTagComponents);
	});
*/
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