/**
 * Test file for Setup Human Web View Action creators
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

import * as SetupHumanWebViewActions from './SetupHumanWebViewActions';

describe('app/hub/Views/SetupView/SetupHumanWebView actions', () => {
	test('setHumanWeb action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupHumanWebViewActions.setHumanWeb(testData)).toEqual({
			type: 'SET_HUMAN_WEB',
			data: testData,
		});
	});
});
