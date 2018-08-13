/**
 * Setup View Action creators
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

import { log, sendMessageInPromise } from '../../utils';

export function getSettingsBackup() {
	return function (dispatch) {
		return sendMessageInPromise('GET_SETTINGS_BACKUP').then((data) => {
			dispatch({
				type: 'GET_SETTINGS_BACKUP',
				data,
			});
		}).catch((err) => {
			log('setupBlocking Action getSettingsBackup Error', err);
		});
	};
}

export function initSetupProps(data) {
	return {
		type: 'INIT_SETUP_PROPS',
		data,
	};
}

export function setSetupNavigation(data) {
	return {
		type: 'SET_SETUP_NAVIGATION',
		data,
	};
}
