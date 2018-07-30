/**
 * Test file for Setup Anti-Suite View Action creators
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

import * as SetupAntiSuiteViewActions from './SetupAntiSuiteViewActions';

describe('app/hub/Views/SetupView/SetupAntiSuiteView actions', () => {
	test('setAntiTracking action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupAntiSuiteViewActions.setAntiTracking(testData)).toEqual({
			type: 'SET_ANTI_TRACKING',
			data: testData,
		});
	});

	test('setAdBlock action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupAntiSuiteViewActions.setAdBlock(testData)).toEqual({
			type: 'SET_AD_BLOCK',
			data: testData,
		});
	});

	test('setSmartBlocking action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupAntiSuiteViewActions.setSmartBlocking(testData)).toEqual({
			type: 'SET_SMART_BLOCKING',
			data: testData,
		});
	});

	test('setGhosteryRewards action should return correctly', () => {
		const testData = {
			test: 'test-data',
		};
		expect(SetupAntiSuiteViewActions.setGhosteryRewards(testData)).toEqual({
			type: 'SET_GHOSTERY_REWARDS',
			data: testData,
		});
	});
});
