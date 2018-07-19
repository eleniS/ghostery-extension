/**
 * Stepped Navigation Test Component
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
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import SteppedNavigation from '../SteppedNavigation';

describe('app/hub/components/SteppedNavigation.jsx', () => {
	describe('Snapshot tests with react-test-renderer', () => {
		test('stepped navigation is rendered correctly on first step', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
					{ index: 4, path: '/test/4' },
					{ index: 5, path: '/test/5' },
					{ index: 6, path: '/test/6' },
				],
				activeIndex: 1,
				hrefDone: '/',
				exitText: 'Exit',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('stepped navigation is rendered correctly on second step', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/example/1' },
					{ index: 2, path: '/example/2' },
					{ index: 3, path: '/example/3' },
				],
				activeIndex: 2,
				hrefDone: '/more-examples',
				exitText: 'Leave',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('stepped navigation is rendered correctly on last step', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
				],
				activeIndex: 3,
				hrefDone: '',
				exitText: 'Not Shown',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});
	});

	describe('More Snapshot tests with react-test-renderer, but for edge cases', () => {
		test('edge case where steps is empty array', () => {
			const initialState = {
				steps: [],
				activeIndex: 1,
				hrefDone: '/',
				exitText: 'Exit',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('edge case where activeIndex not in steps index', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
				],
				activeIndex: 0,
				hrefDone: '/',
				exitText: 'Exit',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('edge case where exitText is not set', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
				],
				activeIndex: 1,
				hrefDone: '/',
				exitText: '',
			};
			const component = renderer.create(
				<MemoryRouter>
					<SteppedNavigation {...initialState} />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});
	});

	describe('Shallow snapshot tests rendered with Enzyme', () => {
		test('the happy path of the component', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
				],
				activeIndex: 1,
				hrefDone: '/',
				exitText: 'Exit',
			};
			const component = shallow(<SteppedNavigation {...initialState} />);
			expect(component.find('.SteppedNavigation__exit').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(1);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(1);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(1);

			component.setProps({ activeIndex: 2 });
			expect(component.find('.SteppedNavigation__exit').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(1);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(2);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(1);

			component.setProps({ activeIndex: 3 });
			expect(component.find('.SteppedNavigation__exit').length).toBe(0);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(0);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(0);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(2);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(1);
		});

		test('the non-happy path of the component', () => {
			const initialState = {
				steps: [
					{ index: 1, path: '/test/1' },
					{ index: 2, path: '/test/2' },
					{ index: 3, path: '/test/3' },
				],
				activeIndex: 1,
				hrefDone: '/',
				exitText: 'Exit',
			};
			// Happy State
			const component = shallow(<SteppedNavigation {...initialState} />);
			expect(component.find('.SteppedNavigation__exit').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(1);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(1);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(1);

			// Unhappy State: activeIndex is not a valid index in steps array
			component.setProps({ activeIndex: 0 });
			expect(component.find('.SteppedNavigation__exit').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(1);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(0);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(0);

			// Unhappy State: exitText is the empty string
			component.setProps({ activeIndex: 2, exitText: '' });
			expect(component.find('.SteppedNavigation__exit').length).toBe(1);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(0);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(1);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(2);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(1);

			// Unhappy State: steps is an empty array
			component.setProps({ steps: [] });
			expect(component.find('.SteppedNavigation__isNull').length).toBe(1);
			expect(component.find('.SteppedNavigation__exit').length).toBe(0);
			expect(component.find('.SteppedNavigation__exitText').length).toBe(0);
			expect(component.find('.SteppedNavigation__exitIcon').length).toBe(0);
			expect(component.find('.SteppedNavigation__buttonContainer .button').length).toBe(0);
			expect(component.find('.SteppedNavigation__circles a.active').length).toBe(0);
		});
	});
});
