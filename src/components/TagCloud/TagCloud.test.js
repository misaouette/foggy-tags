'use strict';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';

import TagCloud from '.';

const tags = [{
	text: 'London',
	size: 10,
	className: 'positive-text'
}, {
	text: 'Berlin',
	size: 14,
	className: 'neutral-text'
}];

const tagCloudProps = {
	tags: tags,
	font: 'Impact',
	svgWidth: 800,
	svgHeight: 500
};

describe('TagCloud structure', () => {
	
	let tree, tagComponents;

	beforeEach(() => {		
		tree = sd.shallowRender(React.createElement(TagCloud, tagCloudProps));
		tagComponents = tree.everySubTree('Tag');
	});

	it("should render all tag texts", () => {
		const texts = tags.map(tag => tag.text);
		expect(tagComponents.map(tag => tag.props.text)).toEqual(texts);
	});

	it("should render all tag sizes", () => {
		const sizes = tags.map(tag => tag.size);
		expect(tagComponents.map(tag => tag.props.size)).toEqual(sizes);
	});

	it("should render all tag class names", () => {
		const classNames = tags.map(tag => tag.className);
		expect(tagComponents.map(tag => tag.props.className)).toEqual(classNames);
	});

	it('should return a compatible d3-cloud svg element', () => {
		const tree = sd.shallowRender(React.createElement(TagCloud, tagCloudProps));
		const renderOutput = tree.getRenderOutput();
		// needs to be strictly respected in order not to break d3-cloud
		expect(renderOutput.type).toEqual('div');
		expect(renderOutput.props.children.type).toEqual('svg');
		expect(renderOutput.props.children.props.width).toEqual(tagCloudProps.svgWidth);
		expect(renderOutput.props.children.props.height).toEqual(tagCloudProps.svgHeight);

		const gRenderOutput = renderOutput.props.children.props.children;
		expect(gRenderOutput.type).toEqual('g');
		// could not find out why gRenderOutput.props is printable but raise following error:
		// Cannot read property 'props' of undefined
        // expect(gRenderOutput.props.transform).toEqual(`translate(${this.props.svgWidth/2},${this.props.svgHeight/2})`);
    });

	describe('TagCloud behaviour', () => {

		it("should not update when prop shouldTagCloudUpdate is set to false", () => {
			const instance = sd.shallowRender(React.createElement(TagCloud, {
				tags: tags, 
				shouldTagCloudUpdate: false
			})).getMountedInstance();

			spyOn(instance, 'componentDidUpdate');

		    instance.setState({}); // don't use forceUpdate as it would not call shouldComponentUpdate

		    expect(instance.componentDidUpdate.calls.any()).toEqual(false);
		});

		it("should update when prop shouldTagCloudUpdate is set to true", () => {
			const instance = sd.shallowRender(React.createElement(TagCloud, {
				tags: tags, 
				shouldTagCloudUpdate: true
			})).getMountedInstance();

			spyOn(instance, 'componentDidUpdate');

		    instance.setState({}); // don't use forceUpdate as it would not call shouldComponentUpdate

		    expect(instance.componentDidUpdate.calls.any()).toEqual(true);
		});

		it("should update when prop shouldTagCloudUpdate is not set", () => {
			const instance = sd.shallowRender(React.createElement(TagCloud, {
				tags: tags
			})).getMountedInstance();

			spyOn(instance, 'componentDidUpdate');

		    instance.setState({}); // don't use forceUpdate as it would not call shouldComponentUpdate

		    expect(instance.componentDidUpdate.calls.any()).toEqual(true);
		});

		it('should compute d3-cloud layout variables', () => {
			const instance = sd.shallowRender(React.createElement(TagCloud, {
				tags: tags
			})).getMountedInstance();
			const nextTagCloudProps = tagCloudProps;

			instance.componentWillUpdate(nextTagCloudProps);

			expect(nextTagCloudProps.tags[0].x).toBeDefined();
			expect(nextTagCloudProps.tags[0].x).toEqual(jasmine.any(Number));

			expect(nextTagCloudProps.tags[0].y).toBeDefined();
			expect(nextTagCloudProps.tags[0].y).toEqual(jasmine.any(Number));

			expect(nextTagCloudProps.tags[0].rotate).toBeDefined();
			expect(nextTagCloudProps.tags[0].rotate).toEqual(jasmine.any(Number));
		});

	});

});