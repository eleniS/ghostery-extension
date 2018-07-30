/**
 * Setup Human Web View Component
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
import ClassNames from 'classnames';

/**
 * A Functional React component for rendering the Setup Human Web View
 * @return {JSX} JSX for rendering the Setup Human Web View of the Hub app
 * @memberof HubComponents
 */
const SetupHumanWebView = props => (
	<div className="setup-human-web-view">
		<h4>Human Web View</h4>
		<div onClick={props.changeHumanWeb}>{props.enableHumanWeb.toString()}</div>
	</div>
);

// PropTypes ensure we pass required props of the correct type
SetupHumanWebView.propTypes = {
	enableHumanWeb: PropTypes.bool.isRequired,
	changeHumanWeb: PropTypes.func.isRequired,
};

export default SetupHumanWebView;
