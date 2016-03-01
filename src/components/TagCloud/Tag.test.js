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
			text: 'London',
			size: 24,
		    x: 0, // computed by d3-cloud layout
		    y: 0, // computed by d3-cloud layout
		    rotate: 0,  // computed by d3-cloud layout
		    className: 'neutral-text',
		    onTagClick:  () => {
		    	mockObject.onTagClick();
		    }
		}));

		spyOn(mockObject, 'onTagClick');

		ReactTestUtils.Simulate.click(
			ReactTestUtils.scryRenderedDOMComponentsWithClass(tagComponent, 'tag-in-cloud')[0]);

		expect(mockObject.onTagClick).toHaveBeenCalledTimes(1);

		expect(mockObject.onTagClick.calls.argsFor(0)).not.toEqual(undefined);
	});
});

