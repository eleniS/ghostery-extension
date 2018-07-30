/**
 * Setup Human Web View Container
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
import SetupHumanWebView from './SetupHumanWebView';

/**
 * @class Implement the Setup Human Web View for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SetupHumanWebViewContainer extends Component {
	constructor(props) {
		super(props);

		// Event Bindings
		this._handleToggle = this._handleToggle.bind(this);
	}

	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const title = 'Ghostery Hub - Setup Human Web';
		window.document.title = title;
	}

	/**
	* Function to handle toggling Human Web Opt-In
	* @param  {Object} event the click event
	*/
	_handleToggle(event) {
		const enable_human_web = !this.props.setup.enable_human_web;
		this.props.actions.setHumanWeb({ enable_human_web });
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup Human Web View of the Hub app
	 */
	render() {
		const childProps = {
			enableHumanWeb: this.props.setup.enable_human_web,
			changeHumanWeb: this._handleToggle,
		};
		return <SetupHumanWebView {...childProps} />;
	}
}

export default SetupHumanWebViewContainer;
