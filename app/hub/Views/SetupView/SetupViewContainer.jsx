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
import PropTypes from 'prop-types';
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
		const title = t('hub_setup_page_title');

		window.document.title = title;

		this.props.actions.initSetupProps(this.props.setup);
		this.props.actions.getSettingsBackup().then(() => {
			// Set the default props for the Setup Flow
			this.props.actions.setBlockingPolicy({ blockingPolicy: 'BLOCKING_POLICY_RECOMMENDED' });
			this.props.actions.setAntiTracking({ enable_anti_tracking: true });
			this.props.actions.setAdBlock({ enable_ad_block: true });
			this.props.actions.setSmartBlocking({ enable_smart_blocking: true });
			this.props.actions.setGhosteryRewards({ enable_ghostery_rewards: true });
			this.props.actions.setHumanWeb({ enable_human_web: true });
		});
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup View of the Hub app
	 */
	render() {
		const { activeIndex } = this.props.setup;
		const steps = [
			{
				index: 1,
				path: '/setup/1',
				bodyComponent: SetupBlockingView,
				headerProps: {
					title: t('hub_setup_header_title_blocking'),
					titleImage: '/app/images/hub/setup/ghosty-block-all.svg',
				},
			},
			{
				index: 2,
				path: '/setup/2',
				bodyComponent: SetupAntiSuiteView,
				headerProps: {
					title: t('hub_setup_header_title_antisuite'),
					titleImage: '/app/images/hub/setup/ghosty-shield-stop-lightbulb.svg',
				},
			},
			{
				index: 3,
				path: '/setup/3',
				bodyComponent: SetupHumanWebView,
				headerProps: {
					title: t('hub_setup_header_title_humanweb'),
					titleImage: '/app/images/hub/setup/ghosty-human-web.svg',
				},
			},
			{
				index: 4,
				path: '/setup/4',
				bodyComponent: SetupDoneView,
				headerProps: {
					title: t('hub_setup_header_title_done'),
					titleImage: '/app/images/hub/setup/ghosty-check-wrench.svg',
				},
			},
		];

		return <SetupView steps={steps} />;
	}
}

// PropTypes ensure we pass required props of the correct type
// Note: isRequired is not needed when a prop has a default value
SetupViewContainer.propTypes = {
	setup: PropTypes.shape({
		navigation: PropTypes.shape({
			activeIndex: PropTypes.number,
			hrefPrev: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
			hrefNext: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
			hrefDone: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
			textPrev: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
			textNext: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
			textDone: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]),
		}),
		settings_backup: PropTypes.shape({
			selected_app_ids: PropTypes.objectOf(PropTypes.number),
			enable_anti_tracking: PropTypes.bool,
			enable_ad_block: PropTypes.bool,
			enable_smart_blocking: PropTypes.bool,
			enable_ghostery_rewards: PropTypes.bool,
			enable_human_web: PropTypes.bool,
		}),
		blockingPolicy: PropTypes.string,
		enable_anti_tracking: PropTypes.bool,
		enable_ad_block: PropTypes.bool,
		enable_smart_blocking: PropTypes.bool,
		enable_ghostery_rewards: PropTypes.bool,
		enable_human_web: PropTypes.bool,
	}),
	actions: PropTypes.shape({
		initSetupProps: PropTypes.func.isRequired,
		setSetupNavigation: PropTypes.func.isRequired,
		setBlockingPolicy: PropTypes.func.isRequired,
		setAntiTracking: PropTypes.func.isRequired,
		setAdBlock: PropTypes.func.isRequired,
		setSmartBlocking: PropTypes.func.isRequired,
		setGhosteryRewards: PropTypes.func.isRequired,
		setHumanWeb: PropTypes.func.isRequired,
	}).isRequired,
};

// Default props used throughout the Setup flow
SetupViewContainer.defaultProps = {
	setup: {
		navigation: {
			activeIndex: 0,
			hrefPrev: false,
			hrefNext: false,
			hrefDone: false,
			textPrev: false,
			textNext: false,
			textDone: false,
		},
		settings_backup: {
			selected_app_ids: {},
			enable_anti_tracking: true,
			enable_ad_block: true,
			enable_smart_blocking: true,
			enable_ghostery_rewards: true,
			enable_human_web: true,
		},
		blockingPolicy: 'BLOCKING_POLICY_RECOMMENDED',
		enable_anti_tracking: true,
		enable_ad_block: true,
		enable_smart_blocking: true,
		enable_ghostery_rewards: true,
		enable_human_web: true,
	},
};

export default SetupViewContainer;
