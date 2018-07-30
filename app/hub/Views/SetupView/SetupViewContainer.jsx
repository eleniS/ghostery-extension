/**
 * Setup View Container
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
import SetupView from './SetupView';

// Component Views
import SetupBlockingView from '../SetupViews/SetupBlockingView';
import SetupAntiSuiteView from '../SetupViews/SetupAntiSuiteView';
import SetupHumanWebView from '../SetupViews/SetupHumanWebView';
import SetupDoneView from '../SetupViews/SetupDoneView';

/**
 * @class Implement the Setup Container View for the Ghostery Hub
 * @extends Component
 * @memberof HubContainers
 */
class SetupViewContainer extends React.Component {
	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const {
			blockingPolicy,
			enable_anti_tracking,
			enable_ad_block,
			enable_smart_blocking,
			enable_ghostery_rewards,
			enable_human_web,
		} = this.props;
		const title = 'Ghostery Hub - Setup';

		window.document.title = title;
		this.props.actions.initSetupProps({
			blockingPolicy,
			enable_anti_tracking,
			enable_ad_block,
			enable_smart_blocking,
			enable_ghostery_rewards,
			enable_human_web,
		});
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup View of the Hub app
	 */
	render() {
		const activeIndex = +this.props.location.pathname.split('/').pop();
		const steps = [
			{
				index: 1,
				path: '/setup/1',
				bodyComponent: SetupBlockingView,
				headerProps: {
					title: 'Ghostery can block trackers to make your browsing cleaner, faster, and safer. What would you like to block?',
					titleImage: '/app/images/hub/setup/ghosty-block-all.svg',
				},
			},
			{
				index: 2,
				path: '/setup/2',
				bodyComponent: SetupAntiSuiteView,
				headerProps: {
					title: 'Would you like to browse smarter with our recommended features?',
					titleImage: '/app/images/hub/setup/ghosty-shield-stop-lightbulb.svg',
				},
			},
			{
				index: 3,
				path: '/setup/3',
				bodyComponent: SetupHumanWebView,
				headerProps: {
					title: 'Would you like to help improve Ghostery?',
					titleImage: '/app/images/hub/setup/ghosty-human-web.svg',
				},
			},
			{
				index: 4,
				path: '/setup/4',
				bodyComponent: SetupDoneView,
				headerProps: {
					title: 'You are ready!',
					titleImage: '/app/images/hub/setup/ghosty-check-wrench.svg',
				},
			},
		];

		return <SetupView activeIndex={activeIndex} steps={steps} />;
	}
}

// Default props used throughout the Setup flow
SetupViewContainer.defaultProps = {
	blockingPolicy: 'recommended',
	enable_anti_tracking: true,
	enable_ad_block: true,
	enable_smart_blocking: true,
	enable_ghostery_rewards: true,
	enable_human_web: true,

	actions: { // ToDo: remove this
		initSetupProps: () => {},
	},
	location: { // ToDo: remove this
		pathname: '/setup/1',
	},
};

export default SetupViewContainer;
