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

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SetupView from './SetupView';
import SetupModal from '../SetupViews/SetupModal';
import ToggleCheckbox from '../../../shared-components/ToggleCheckbox';

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
	constructor(props) {
		super(props);
		this.state = {
			openModalEnter: false,
			checkAskAgain: false,
		};

		// Event Bindings
		this._toggleModal = this._toggleModal.bind(this);
		this._toggleCheckbox = this._toggleCheckbox.bind(this);
		this._resetSettings = this._resetSettings.bind(this);
	}

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
	* Function to toggle the Modal
	* This was duplicated from SetupNavigationContainer. ToDo: Consolidate
	*/
	_toggleModal() {
		const { openModalEnter } = this.state;
		this.setState({
			openModalEnter: !openModalEnter,
		});
	}

	/**
	* Function to toggle the Ask Again Checkbox
	*/
	_toggleCheckbox() {
		const { checkAskAgain } = this.state;
		this.setState({
			checkAskAgain: !checkAskAgain,
		});
	}

	/**
	* Function to reset settings
	* This was duplicated from SetupNavigationContainer. ToDo: Consolidate
	*/
	_resetSettings() {
		const { actions, setup } = this.props;
		const {
			selected_app_ids,
			enable_anti_tracking,
			enable_ad_block,
			enable_smart_blocking,
			enable_ghostery_rewards,
			enable_human_web,
		} = setup.settings_backup;

		actions.setBlockingPolicy({ blockingPolicy: 'BLOCKING_POLICY_CUSTOM', selected_app_ids });
		actions.setAntiTracking({ enable_anti_tracking });
		actions.setAdBlock({ enable_ad_block });
		actions.setSmartBlocking({ enable_smart_blocking });
		actions.setGhosteryRewards({ enable_ghostery_rewards });
		actions.setHumanWeb({ enable_human_web });
	}

	/**
	 * Helper render function for rendering the Modal's Children
	 * @return {JSX} JSX of the Setup Modal's Children
	 */
	_renderModalChildren() {
		const { checkAskAgain } = this.state;

		return (
			<div className="SetupModal__buttonContainer SetupModal--short full-width">
				<div className="full-width flex-container align-justify">
					<NavLink to="/" onClick={this._resetSettings} className="button success hollow">
						{t('hub_setup_modal_button_no')}
					</NavLink>
					<div className="button success hollow" onClick={this._toggleModal}>
						{t('hub_setup_modal_button_yes')}
					</div>
				</div>
				<div className="flex-container align-center-middle">
					<ToggleCheckbox checked={checkAskAgain} onChange={this._toggleCheckbox} />
					<div className="SetupModal__checkboxText" onClick={this._toggleCheckbox}>
						{t('hub_setup_modal_button_ask_again')}
					</div>
				</div>
			</div>
		);
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup View of the Hub app
	 */
	render() {
		const { openModalEnter } = this.state;
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

		return (
			<div className="full-height">
				<SetupModal show={openModalEnter} text={t('hub_setup_enter_modal_text')} toggle={this._toggleModal}>
					{this._renderModalChildren()}
				</SetupModal>
				<SetupView steps={steps} />;
			</div>
		);
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
