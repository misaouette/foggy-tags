'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TagCloud, {Tag} from '.';
import sd from 'skin-deep';
import $ from 'jquery';

import topicsData from '../../../data/topics.json';


describe('TagCloud', () => {
	const topics = topicsData.topics;
	let tree, tags;

	beforeEach(() => {
		tree = sd.shallowRender(React.createElement(TagCloud, {topics}));
		tags = tree.everySubTree('Tag');
	});


	it("renders all topic labels", () => {
		const labels = topics.map(topic => topic.label);
		labels.forEach(label => {
			expect(tags.map(tag => tag.props.label)).toContain(label);
		});
	});

	it("uses 6 different css classes for volume", () => {
		const tagVolumeClasses = tags.map(tag => tag.props.volumeClass)
		.filter((volumeClass, index, self) => (self.indexOf(volumeClass) === index)); // keep unique values

		expect(tagVolumeClasses).not.toContain('');
		expect(tagVolumeClasses).toEqual(6);
	});

	it("render labels whose sentiment score > 60 with a positive css class", () => {
		const positiveTopics = topics.filter(topic => topic.sentimentScore > 60)
		.map(topic => topic.label);

		const positiveTags = tags.filter(tag => (tag.props.sentimentClass === 'positive-text'))
		.map(tag => tag.props.label);

		expect(positiveTopics).toEqual(positiveTags);  
	});

	it("render labels whose sentiment score < 40 with a negative css class", () => {
		const negativeTopics = topics.filter(topic => topic.sentimentScore < 40)
		.map(topic => topic.label);

		const negativeTags = tags.filter(tag => (tag.props.sentimentClass === 'negative-text'))
		.map(tag => tag.props.label);

		expect(negativeTopics).toEqual(negativeTags);
	});

	it("render other labels with a neutral css class", () => {
		const neutralTopics = topics.filter(topic => topic.sentimentScore <= 60 && topic.sentimentScore >=40)
		.map(topic => topic.label);

		const neutralTags = tags.filter(tag => (tag.props.sentimentClass === 'neutral-text'))
		.map(tag => tag.props.label);

		expect(neutralTopics).toEqual(neutralTags);
	});
});


/* Testing behaviour */
describe('Tag', () => {

	it('should call the onClick props when clicked', () => {
		const mockObject = {
			onTagClick: function () {
				// do nothing
			}
		};

		const tagComponent = ReactTestUtils.renderIntoDocument(
			<Tag label='London'
			volumeClass= 'volume3' sentimentClass= 'neutral-text'
			onTagClick= { () => {
				mockObject.onTagClick();
			}
		}
		/>);

		spyOn(mockObject, 'onTagClick');

		ReactTestUtils.Simulate.click(
			ReactTestUtils.scryRenderedDOMComponentsWithClass(tagComponent, 'tag-in-cloud')[0]);

		expect(mockObject.onTagClick).toHaveBeenCalledTimes(1);
	});
});

