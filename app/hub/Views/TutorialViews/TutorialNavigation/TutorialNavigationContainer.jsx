/**
 * Tutorial Navigation Container for Stepped Navigation Component
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
import { SteppedNavigation } from '../../../../shared-components';

/**
 * @class Implement the Tutorial version of the Stepped Navigation Component
 * @extends Component
 * @memberof HubComponents
 */
class TutorialNavigationContainer extends Component {
	render () {
		const childProps = {
			totalSteps: 6,
			activeIndex: 1,
			hrefPrev: false,
			hrefNext: '/tutorial/2',
			hrefDone: '/',
			textPrev: false,
			textNext: 'Next',
			textDone: 'Exit Tutorial',
		};
		return <SteppedNavigation {...childProps} />;
	}
}

// PropTypes ensure we pass required props of the correct type
TutorialNavigationContainer.propTypes = {
};

export default TutorialNavigationContainer;
