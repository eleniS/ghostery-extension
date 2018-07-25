/**
 * Setup View Test Component
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2018 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import SetupView from './SetupView';
import SetupHeader from '../SetupViews/SetupHeader';
import SteppedNavigation from '../../SteppedNavigation';

const TestComponent = props => (
	<div>test component</div>
);

describe('app/hub/Views/SetupView', () => {
	describe('Snapshot tests with react-test-renderer', () => {
		test('setup view is rendered correctly on first route', () => {
			const initialState = {
				activeIndex: 1,
				steps: [
					{
						index: 1,
						path: '/test/1',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 1',
							titleImage: 'image for title test 1',
						}
					},
					{
						index: 2,
						path: '/test/2',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 2',
							titleImage: 'image for title test 2',
						}
					},
				],
			};
			const activeStep = initialState.steps.find(el => el.index === initialState.activeIndex);
			const component = renderer.create(
				<MemoryRouter initialEntries={[activeStep.path]} >
					<SetupView {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('setup view is rendered correctly on last route', () => {
			const initialState = {
				activeIndex: 3,
				steps: [
					{
						index: 1,
						path: '/example/1',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title example 1',
							titleImage: 'image for title example 1',
						}
					},
					{
						index: 2,
						path: '/example/2',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title example 2',
							titleImage: 'image for title example 2',
						}
					},
					{
						index: 3,
						path: '/example/3',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title example 3',
							titleImage: 'image for title example 3',
						}
					},
				],
			};
			const activeStep = initialState.steps.find(el => el.index === initialState.activeIndex);
			const component = renderer.create(
				<MemoryRouter initialEntries={[activeStep.path]} >
					<SetupView {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});
	});

	describe('More Snapshot tests with react-test-renderer, but for edge cases', () => {
		test('edge case where steps is empty array', () => {
			const initialState = {
				activeIndex: 1,
				steps: [],
			};
			const component = renderer.create(
				<MemoryRouter>
					<SetupView {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('edge case where activeIndex not in steps index', () => {
			const initialState = {
				activeIndex: 4,
				steps: [
					{
						index: 1,
						path: '/test/1',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 1',
							titleImage: 'image for title test 1',
						}
					},
					{
						index: 2,
						path: '/test/2',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 2',
							titleImage: 'image for title test 2',
						}
					},
				],
			};
			const component = renderer.create(
				<MemoryRouter initialEntries={['/test/4']} >
					<SetupView {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});
	});

	describe('Mount snapshot tests rendered with Enzyme', () => {
		test.skip('the happy path of the component', () => {
			const initialState = {
				activeIndex: 1,
				steps: [
					{
						index: 1,
						path: '/test/1',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 1',
							titleImage: 'title-image-1',
						}
					},
					{
						index: 2,
						path: '/test/2',
						bodyComponent: TestComponent,
						headerProps: {
							title: 'title test 2',
							titleImage: 'title-image-2',
						}
					},
				],
			};
			const paths = initialState.steps.map(el => el.path);
			const component = mount(
				<MemoryRouter initialEntries={paths} initialIndex={0} >
					<SetupView {...initialState} />
				</MemoryRouter>
			);
			expect(component.find(SetupView).length).toBe(1);
			expect(component.find(SetupHeader).length).toBe(1);
			expect(component.find(TestComponent).length).toBe(1);
			expect(component.find(SteppedNavigation).length).toBe(1);
			expect(component.find({ src: 'title-image-1'}).length).toBe(1);
			expect(component.find({ src: 'title-image-2'}).length).toBe(0);

			component.setProps({ initialIndex: 1 });
			expect(component.find(SetupView).length).toBe(1);
			expect(component.find(SetupHeader).length).toBe(1);
			expect(component.find(TestComponent).length).toBe(1);
			expect(component.find(SteppedNavigation).length).toBe(1);
			// expect(component.find({ src: 'title-image-1'}).length).toBe(0); // Broken because router doesn't automatically update activeIndex
			// expect(component.find({ src: 'title-image-2'}).length).toBe(1); // Broken because router doesn't automatically update activeIndex
		});

		test.skip('the non-happy path of the component', () => {
		});
	});
});
