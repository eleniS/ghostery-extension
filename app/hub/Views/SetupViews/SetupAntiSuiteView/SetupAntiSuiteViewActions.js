/**
 * Setup Anti-Suite View Action creators
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

export function setAntiTracking(data) {
	return {
		type: 'SET_ANTI_TRACKING',
		data,
	};
}

export function setAdBlock(data) {
	return {
		type: 'SET_AD_BLOCK',
		data,
	};
}

export function setSmartBlocking(data) {
	return {
		type: 'SET_SMART_BLOCKING',
		data,
	};
}

export function setGhosteryRewards(data) {
	return {
		type: 'SET_GHOSTERY_REWARDS',
		data,
	};
}
