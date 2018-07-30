/**
 * Setup Blocking View Container
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
import SetupBlockingView from './SetupBlockingView';

/**
 * @class Implement the Setup Blocking View for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SetupBlockingViewContainer extends Component {
	constructor(props) {
		super(props);

		// Event Bindings
		this._handleChange = this._handleChange.bind(this);
	}

	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const title = 'Ghostery Hub - Setup Blocking';
		window.document.title = title;
	}

	/**
	* Function to handle a change made on the Setup Blocking View
	* @param  {Object} event the click event
	*/
	_handleChange(event) {
		const blockingPolicy = event.target.value;
		this.props.actions.setBlockingPolicy({ blockingPolicy });
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup Blocking View of the Hub app
	 */
	render() {
		const { blockingPolicy } = this.props.setup;
		const choices = [
			{
				name: 'nothing',
				image: '/app/images/hub/setup/block-none.svg',
				text: 'Block Nothing',
				belowText: 'No trackers blocked.',
			},
			{
				name: 'recommended',
				image: '/app/images/hub/setup/block-ads.svg',
				text: 'Ghostery Default Blocking',
				aboveText: 'Recommended',
				belowText: 'Advertising, Site Analytics, and Adult Advertising trackers blocked.',
			},
			{
				name: 'everything',
				image: '/app/images/hub/setup/block-all.svg',
				text: 'Block Everyting',
				belowText: 'All trackers blocked',
			},
			{
				name: 'custom',
				image: '/app/images/hub/setup/block-custom.svg',
				text: 'Choose from List',
				belowText: 'Choose which trackers you\'d like to block',
			},
		];

		return <SetupBlockingView blockingPolicy={blockingPolicy} choices={choices} handleSelection={this._handleChange} />;
	}
}

export default SetupBlockingViewContainer;
