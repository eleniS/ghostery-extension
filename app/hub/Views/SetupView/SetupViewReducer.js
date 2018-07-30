/**
 * Reducer used throughout the Setup View's flow
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

const initialState = {};

function SetupViewReducer(state = initialState, action) {
	switch (action.type) {
		// Setup View
		case 'INIT_SETUP_PROPS': {
			const {
				blockingPolicy,
				enable_anti_tracking,
				enable_ad_block,
				enable_smart_blocking,
				enable_ghostery_rewards,
				enable_human_web,
			} = action.data;
			return Object.assign({}, state, {
				setup: {
					blockingPolicy,
					enable_anti_tracking,
					enable_ad_block,
					enable_smart_blocking,
					enable_ghostery_rewards,
					enable_human_web,
				},
			});
		}

		// Setup Blocking View
		case 'SET_BLOCKING_POLICY': {
			const { blockingPolicy } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { blockingPolicy }),
			});
		}

		// Setup Anti-Suite View
		case 'SET_ANTI_TRACKING': {
			const { enable_anti_tracking } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { enable_anti_tracking }),
			});
		}
		case 'SET_AD_BLOCK': {
			const { enable_ad_block } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { enable_ad_block }),
			});
		}
		case 'SET_SMART_BLOCKING': {
			const { enable_smart_blocking } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { enable_smart_blocking }),
			});
		}
		case 'SET_GHOSTERY_REWARDS': {
			const { enable_ghostery_rewards } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { enable_ghostery_rewards }),
			});
		}

		// Setup Human Web View
		case 'SET_HUMAN_WEB': {
			const { enable_human_web } = action.data;
			return Object.assign({}, state, {
				setup: Object.assign({}, state.setup, { enable_human_web }),
			});
		}

		default: return state;
	}
}

export default SetupViewReducer;
