/**
 * Setup Anti-Suite View Container
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

import React, { Component } from 'react';
import SetupAntiSuiteView from './SetupAntiSuiteView';

/**
 * @class Implement the Setup Anti-Suite View for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SetupAntiSuiteViewContainer extends Component {
	constructor(props) {
		super(props);

		// Event Bindings
		this._handleToggle = this._handleToggle.bind(this);
	}

	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const title = 'Ghostery Hub - Setup Anti-Suite';
		window.document.title = title;
	}

	/**
	* Function to handle toggling a feature on the Setup Anti-Suite View
	* @param  {Object} featureName the name of the feature being toggled
	*/
	_handleToggle(featureName) {
		switch (featureName) {
			case 'anti-tracking': {
				const enable_anti_tracking = !this.props.setup.enable_anti_tracking;
				this.props.actions.setAntiTracking({ enable_anti_tracking });
				break;
			}
			case 'ad-block': {
				const enable_ad_block = !this.props.setup.enable_ad_block;
				this.props.actions.setAdBlock({ enable_ad_block });
				break;
			}
			case 'smart-blocking': {
				const enable_smart_blocking = !this.props.setup.enable_smart_blocking;
				this.props.actions.setSmartBlocking({ enable_smart_blocking });
				break;
			}
			case 'ghostery-rewards': {
				const enable_ghostery_rewards = !this.props.setup.enable_ghostery_rewards;
				this.props.actions.setGhosteryRewards({ enable_ghostery_rewards });
				break;
			}
			default: break;
		}
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup Anti-Suite View of the Hub app
	 */
	render() {
		const {
			enable_anti_tracking,
			enable_ad_block,
			enable_smart_blocking,
			enable_ghostery_rewards,
		} = this.props.setup;
		const features = [
			{
				id: 'anti-tracking',
				name: 'Enhanced Anti-Tracking',
				enabled: enable_anti_tracking,
				toggle: () => {
					this._handleToggle('anti-tracking');
				},
				icon: '',
				description: 'Anonymizes unblocked and unknown trackers for greater browsing protection.',
			},
			{
				id: 'ad-block',
				name: 'Enhanced Ad Blocking',
				enabled: enable_ad_block,
				toggle: () => {
					this._handleToggle('ad-block');
				},
				icon: '',
				description: 'You can choose to show or block advertisements on all or selected websites.',
			},
			{
				id: 'smart-blocking',
				name: 'Smart Blocking',
				enabled: enable_smart_blocking,
				toggle: () => {
					this._handleToggle('smart-blocking');
				},
				icon: '',
				description: 'Automatically blocks and unblocks trackers that are disrupting page performance.',
			},
			{
				id: 'ghostery-rewards',
				name: 'Ghostery Rewards',
				enabled: enable_ghostery_rewards,
				toggle: () => {
					this._handleToggle('ghostery-rewards');
				},
				icon: '',
				description: 'Make Patrick proud and turn on his feature!',
			},
		];
		const componentProps = {
			enable_anti_tracking,
			enable_ad_block,
			enable_smart_blocking,
			enable_ghostery_rewards,
		};

		return <SetupAntiSuiteView features={features} />;
	}
}

export default SetupAntiSuiteViewContainer;
