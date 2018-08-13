/**
 * Main Reducer index.js file for the Hub to Combine Reducers
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

import { combineReducers } from 'redux';
import { reducer as setup } from '../Views/SetupView';

const Reducers = combineReducers({
	setup,
});

export default Reducers;
