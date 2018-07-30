/**
 * Test file for Setup Blocking View Action creators
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

import * as SetupBlockingViewActions from './SetupBlockingViewActions';

describe('app/hub/Views/SetupView/SetupBlockingView actions', () => {
	test('setBlockingPolicy action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupBlockingViewActions.setBlockingPolicy(testData)).toEqual({
			type: 'SET_BLOCKING_POLICY',
			data: testData,
		});
	});
});
