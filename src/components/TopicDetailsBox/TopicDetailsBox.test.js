'use strict';

import React from 'react';
import TopicDetailsBox from '.';
import sd from 'skin-deep';


describe('TopicDetailsBox', () => {
	const topic = {
		"id": "1751295897__London",
		"label": "London",
		"volume": 11,
		"type": "topic",
		"sentiment": {
			"neutral": 8,
			"positive": 3
		},
		"sentimentScore": 77,
		"burst": 9,
		"days": [
		{
			"date": "2014-06-06T00:00:00.000+0000",
			"volume": 1
		},
		{
			"date": "2014-06-04T00:00:00.000+0000",
			"volume": 2
		},
		{
			"date": "2014-06-09T00:00:00.000+0000",
			"volume": 0
		},
		{
			"date": "2014-06-07T00:00:00.000+0000",
			"volume": 1
		},
		{
			"date": "2014-06-08T00:00:00.000+0000",
			"volume": 0
		},
		{
			"date": "2014-06-03T00:00:00.000+0000",
			"volume": 5
		},
		{
			"date": "2014-06-05T00:00:00.000+0000",
			"volume": 2
		}
		],
		"pageType": {
			"blog": 1,
			"facebook": 5,
			"forum": 1,
			"general": 1,
			"image": 0,
			"news": 2,
			"review": 0,
			"twitter": 1,
			"video": 0
		},
		"queries": [
		{
			"id": 1751295897,
			"name": "Berghain",
			"volume": 11
		}
		]
	};
	let tree;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TopicDetailsBox, {topic:topic}));
	});
	
	it("renders the topic label", () => {
		const value = tree.subTree('.label').text();
		expect(value).toEqual(topic.label);
	});

	it("renders the general volume value", () => {
		const value = tree.subTree('.volume').text();
		expect(value).toEqual(`${topic.volume|0}`);
	});

	it("renders the positive volume value", () => {
		const value = tree.subTree('.positive-text').text();
		expect(value).toEqual(`${topic.sentiment.positive|0}`);
	});
	
	it("renders the neutral volume value", () => {
		const value = tree.subTree('.neutral-text').text();
		expect(value).toEqual(`${topic.sentiment.neutral|0}`);
	});

	it("renders the negative volume value", () => {
		const value = tree.subTree('.negative-text').text();
		expect(value).toEqual(`${topic.sentiment.negative|0}`);
	});
});