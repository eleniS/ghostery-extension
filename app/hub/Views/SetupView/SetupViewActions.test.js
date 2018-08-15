/**
 * Test file for Setup View Action creators
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

import * as SetupViewActions from './SetupViewActions';

describe('app/hub/Views/SetupView/ actions', () => {
	test('initSetupProps action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupViewActions.initSetupProps(testData)).toEqual({
			type: 'INIT_SETUP_PROPS',
			data: testData,
		});
	});

	test('setSetupNavigation action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupViewActions.setSetupNavigation(testData)).toEqual({
			type: 'SET_SETUP_NAVIGATION',
			data: testData,
		});
	});
});
