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

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as utils from '../../utils';
import * as SetupViewActions from './SetupViewActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const testData = { test: true };
utils.sendMessageInPromise = jest.fn((name, message) => new Promise((resolve, reject) => {
	switch (name) {
		case 'GET_SETTINGS_BACKUP': {
			resolve(testData);
			break;
		}
		default: resolve(message);
	}
}));

describe('app/hub/Views/SetupView/ actions', () => {
	test('getSettingsBackup action should return correctly', () => {
		const initialState = {};
		const store = mockStore(initialState);

		const data = testData;
		const expectedPayload = { data, type: 'GET_SETTINGS_BACKUP' };

		return store.dispatch(SetupViewActions.getSettingsBackup()).then(() => {
			const actions = store.getActions();
			expect(actions).toEqual([expectedPayload]);
		});
	});

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
