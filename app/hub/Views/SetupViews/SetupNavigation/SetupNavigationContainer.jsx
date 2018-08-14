/**
 * Setup Navigation Container for Stepped Navigation Component
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
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SetupModal from '../SetupModal';
import { SteppedNavigation } from '../../../../shared-components';

/**
 * @class Implement the Setup version of Stepped Navigation for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SetupNavigationContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModalExit: false,
		};

		// Event Bindings
		this._toggleModal = this._toggleModal.bind(this);
		this._resetSettings = this._resetSettings.bind(this);
	}

	/**
	* Function to toggle the Modal
	*/
	_toggleModal() {
		const { openModalExit } = this.state;
		this.setState({
			openModalExit: !openModalExit,
		});
	}

	/**
	* Function to reset settings
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
		const { hrefDone } = this.props.setup.navigation;

		return (
			<div className="SetupModal__buttonContainer full-width flex-container align-justify">
				<div className="button success hollow" onClick={this._toggleModal}>
					{t('hub_setup_modal_button_no')}
				</div>
				<NavLink to={hrefDone} onClick={this._resetSettings} className="button success hollow">
					{t('hub_setup_modal_button_yes')}
				</NavLink>
			</div>
		);
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup version of the Stepped Navigation component
	 */
	render() {
		const { openModalExit } = this.state;
		const { totalSteps, setup } = this.props;
		const { navigation } = setup;
		const {
			activeIndex,
			hrefPrev,
			hrefNext,
			hrefDone,
			textPrev,
			textNext,
			textDone,
		} = navigation;
		const navigationProps = {
			totalSteps,
			activeIndex,
			hrefPrev,
			hrefNext,
			hrefDone,
			textPrev,
			textNext,
			textDone,
		};

		return (
			<div>
				<SetupModal show={openModalExit} showClose text={t('hub_setup_exit_modal_text')} toggle={this._toggleModal}>
					{this._renderModalChildren()}
				</SetupModal>
				<SteppedNavigation {...navigationProps} clickExit={this._toggleModal} />
			</div>
		);
	}
}

// PropTypes ensure we pass required props of the correct type
SetupNavigationContainer.propTypes = {
	totalSteps: PropTypes.number.isRequired,
	setup: PropTypes.shape({
		navigation: PropTypes.shape({
			activeIndex: PropTypes.number.isRequired,
			hrefPrev: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
			hrefNext: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
			hrefDone: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
			textPrev: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
			textNext: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
			textDone: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.string,
			]).isRequired,
		}).isRequired,
		settings_backup: PropTypes.shape({
			selected_app_ids: PropTypes.objectOf(PropTypes.number).isRequired,
			enable_anti_tracking: PropTypes.bool.isRequired,
			enable_ad_block: PropTypes.bool.isRequired,
			enable_smart_blocking: PropTypes.bool.isRequired,
			enable_ghostery_rewards: PropTypes.bool.isRequired,
			enable_human_web: PropTypes.bool.isRequired,
		}).isRequired,
	}).isRequired,
	actions: PropTypes.shape({
		setBlockingPolicy: PropTypes.func.isRequired,
		setAntiTracking: PropTypes.func.isRequired,
		setAdBlock: PropTypes.func.isRequired,
		setSmartBlocking: PropTypes.func.isRequired,
		setGhosteryRewards: PropTypes.func.isRequired,
		setHumanWeb: PropTypes.func.isRequired,
	}).isRequired,
};

export default SetupNavigationContainer;
