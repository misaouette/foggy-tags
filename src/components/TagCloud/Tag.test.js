'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Tag from './Tag';

/* Testing behaviour */
describe('Tag', () => {
	let tagProps;

	beforeEach(() => {
		tagProps = {
			text: 'London',
			size: 24,
		    x: 0, // computed by d3-cloud layout
		    y: 0, // computed by d3-cloud layout
		    rotate: 0,  // computed by d3-cloud layout
		    className: 'neutral-text',
		    onTagClick:  () => {
		    }
		};
	});

	it('should call the onClick prop with text prop passed as an argument when clicked', () => {
		const mockObject = {
			onTagClick: function () {
				// do nothing
			}
		};

		spyOn(mockObject, 'onTagClick');

		tagProps.onTagClick = () => {
			mockObject.onTagClick();
		};

		var element = React.createElement(Tag, tagProps);
		const tagRenderOutput = ReactTestUtils.renderIntoDocument(element);

		expect(mockObject.onTagClick.calls.any()).toBe(false);

		ReactTestUtils.Simulate.click(
			ReactTestUtils.scryRenderedDOMComponentsWithClass(tagRenderOutput, 'tag-in-cloud')[0]);

		expect(mockObject.onTagClick).toHaveBeenCalledTimes(1);

		expect(mockObject.onTagClick.calls.argsFor(0)).not.toEqual(tagProps.text);
	});

	it('should return a compatible d3-cloud svg text element', () => {
		var shallowRenderer = ReactTestUtils.createRenderer();
		shallowRenderer.render(React.createElement(Tag, tagProps));

		var reactElement = shallowRenderer.getRenderOutput();
		// needs to be strictly respected in order not to break d3-cloud
		expect(reactElement.type).toEqual('text');
		expect(reactElement.props.className).toEqual(`tag-in-cloud ${tagProps.className}`);
		expect(reactElement.props.style).toEqual({ fontSize: tagProps.size });
		expect(reactElement.props.textAnchor).toEqual('middle');
		expect(reactElement.props.transform).toEqual(`translate(${tagProps.x},${tagProps.y})rotate(${tagProps.rotate})`);
		expect(reactElement.props.children).toEqual(tagProps.text);
	});
});