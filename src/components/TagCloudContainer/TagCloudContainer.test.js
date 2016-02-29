'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TagCloudContainer from '.';
import sd from 'skin-deep';
import topicsData from '../../../data/topics.json';


describe('TagCloudContainer', () => {
	let tree, tagComponents;
	const topics = topicsData.topics;
	
	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TagCloudContainer, topicsData));
		tagComponents = tree.dive(['TagCloud']).everySubTree('Tag');
	});


	it("uses 6 different topic size for volume", () => {
		const topicSizes = tagComponents.map(topic => topic.props.size)
		.filter((size, index, self) => (self.indexOf(size) === index)); // keep unique values

		expect(topicSizes).not.toContain(undefined);
		expect(topicSizes.length).toEqual(6);
	});

	it("render labels whose sentiment score > 60 with a positive css class", () => {
		const positivetopics = topics.filter(topic => topic.sentimentScore > 60)
		.map(topic => topic.label);

		const positiveTopicComponents = tagComponents.filter(topic => (topic.props.sentimentClass === 'positive-text'))
		.map(topic => topic.props.label);

		expect(positivetopics).toEqual(positiveTopicComponents);  
	});

	it("render labels whose sentiment score < 40 with a negative css class", () => {
		const negativetopics = topics.filter(topic => topic.sentimentScore < 40)
		.map(topic => topic.label);

		const negativeTopicComponents = tagComponents.filter(topic => (topic.props.sentimentClass === 'negative-text'))
		.map(topic => topic.props.label);

		expect(negativetopics).toEqual(negativeTopicComponents);
	});

	it("render other labels with a neutral css class", () => {
		const neutralTopics = topics.filter(topic => topic.sentimentScore <= 60 && topic.sentimentScore >=40)
		.map(topic => topic.label);

		const neutralTopicComponents = tagComponents.filter(topic => (topic.props.sentimentClass === 'neutral-text'))
		.map(topic => topic.props.label);

		expect(neutralTopics).toEqual(neutralTopicComponents);
	});
});