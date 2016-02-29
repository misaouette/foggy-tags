'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Tag from './Tag';
import sd from 'skin-deep';

/* Testing behaviour */
describe('Tag', () => {

	it('should call the onClick props when clicked', () => {
		const mockObject = {
			onTagClick: function () {
				// do nothing
			}
		};

		const tagComponent = ReactTestUtils.renderIntoDocument(React.createElement(Tag,{
			id:1,
			label: 'London',
			sentimentClass: 'neutral-text',
			x: 0, 
			y: 0, 
			rotate: 0,
			onTagClick:  () => {
				mockObject.onTagClick();
			}
		}));

		spyOn(mockObject, 'onTagClick');

		ReactTestUtils.Simulate.click(
			ReactTestUtils.scryRenderedDOMComponentsWithClass(tagComponent, 'tag-in-cloud')[0]);

		expect(mockObject.onTagClick).toHaveBeenCalledTimes(1);
	});
});

