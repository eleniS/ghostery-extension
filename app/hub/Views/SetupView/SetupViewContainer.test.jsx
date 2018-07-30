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
 * ToDo: Update this file with Integration Tests using Enzyme
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

// Mock Necessary Imports
jest.mock('../SetupViews/SetupBlockingView', () => props => <div>Mock Setup Blocking View</div>);
jest.mock('../SetupViews/SetupAntiSuiteView', () => props => <div>Mock Setup Anti-Suite View</div>);
jest.mock('../SetupViews/SetupHumanWebView', () => props => <div>Mock Setup Human Web View</div>);
jest.mock('../SetupViews/SetupDoneView', () => props => <div>Mock Setup Done View</div>);
jest.mock('../../SteppedNavigation', () => props => <div>Mock Stepped Navigation</div>);

// Import Components
import SetupViewContainer from './SetupViewContainer';

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
		test.skip('the happy path of the component', () => {});

		test.skip('the non-happy path of the component', () => {});
	});
});
