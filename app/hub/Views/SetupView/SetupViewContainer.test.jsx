/**
 * Setup View Container Test Component
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2018 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 *
 * ToDo: Update this file
 */

import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

// Mock Necessary Imports
jest.mock('../SetupViews/SetupBlockingView', () => props => <div>Mock Setup Blocking View</div>);
jest.mock('../SetupViews/SetupAntiSuiteView', () => props => <div>Mock Setup Anti-Suite View</div>);
jest.mock('../SetupViews/SetupHumanWebView', () => props => <div>Mock Setup Human Web View</div>);
jest.mock('../SetupViews/SetupDoneView', () => props => <div>Mock Setup Done View</div>);
jest.mock('../../SteppedNavigation', () => props => <div>Mock Stepped Navigation</div>);

// Import Components
import SetupViewContainer from './SetupViewContainer';
// import SetupView from './SetupView';
// import SetupHeader from '../SetupViews/SetupHeader';

// Import Mocked Setup Views
// import SetupBlockingView from '../SetupViews/SetupBlockingView';
// import SetupAntiSuiteView from '../SetupViews/SetupAntiSuiteView';
// import SetupHumanWebView from '../SetupViews/SetupHumanWebView';
// import SetupDoneView from '../SetupViews/SetupDoneView';
// import SteppedNavigation from '../../SteppedNavigation';

describe('app/hub/Views/SetupView container', () => {
	describe('Snapshot tests with react-test-renderer', () => {
		test('setup view container is rendered correctly on the Blocking step', () => {
			const paths = ['/setup/1', '/setup/2', '/setup/3', '/setup/4'];
			const component = renderer.create(
				<MemoryRouter initialEntries={paths} initialIndex={0} >
					<SetupViewContainer />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('setup view container is rendered correctly on the Anti-Suite step', () => {
			const paths = ['/setup/1', '/setup/2', '/setup/3', '/setup/4'];
			const component = renderer.create(
				<MemoryRouter initialEntries={paths} initialIndex={1} >
					<SetupViewContainer />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('setup view container is rendered correctly on the Human Web step', () => {
			const paths = ['/setup/1', '/setup/2', '/setup/3', '/setup/4'];
			const component = renderer.create(
				<MemoryRouter initialEntries={paths} initialIndex={2} >
					<SetupViewContainer />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});

		test('setup view container is rendered correctly on the Done step', () => {
			const paths = ['/setup/1', '/setup/2', '/setup/3', '/setup/4'];
			const component = renderer.create(
				<MemoryRouter initialEntries={paths} initialIndex={3} >
					<SetupViewContainer />
				</MemoryRouter>
			).toJSON();
			expect(component).toMatchSnapshot();
		});
	});

	describe('Mount snapshot tests rendered with Enzyme', () => {
		test.skip('the happy path of the component', () => {
			const paths = ['/setup/1', '/setup/2', '/setup/3', '/setup/4'];
			const component = mount(
				<MemoryRouter initialEntries={paths} initialIndex={0} >
					<SetupViewContainer />
				</MemoryRouter>
			);
			expect(component.find(SetupViewContainer).length).toBe(1);
			expect(component.find(SetupView).length).toBe(1);
			expect(component.find(SetupHeader).length).toBe(1);
			expect(component.find(SteppedNavigation).length).toBe(1);
			expect(component.find(SetupBlockingView).length).toBe(1);
			expect(component.find(SetupAntiSuiteView).length).toBe(0);
			expect(component.find(SetupHumanWebView).length).toBe(0);
			expect(component.find(SetupDoneView).length).toBe(0);
			//
			// component.setProps({ initialIndex: 1 });
			// expect(component.find(SetupView).length).toBe(1);
			// expect(component.find(SetupHeader).length).toBe(1);
			// expect(component.find(TestComponent).length).toBe(1);
			// expect(component.find(SteppedNavigation).length).toBe(1);
			// expect(component.find({ src: 'title-image-1'}).length).toBe(0); // Broken because router doesn't automatically update activeIndex
			// expect(component.find({ src: 'title-image-2'}).length).toBe(1); // Broken because router doesn't automatically update activeIndex
		});

		test.skip('the non-happy path of the component', () => {
		});
	});
});
