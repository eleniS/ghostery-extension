/**
 * Tutorial View Component
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
import { Route } from 'react-router-dom';

// Components
import SteppedNavigation from '../../SteppedNavigation';

/**
 * A Functional React component for rendering the Tutorial View
 * @return {JSX} JSX for rendering the Setup View of the Hub app
 * @memberof HubComponents
 */
const TutorialView = props => (
	<div className="full-height flex-container flex-dir-column">
		<div className="flex-child-grow">
			{props.steps.map(step => (
				<Route
					key={`route-${step.index}`}
					path={step.path}
					render={() => (
						<div>
							<step.bodyComponent />
						</div>
					)}
				/>
			))}
		</div>

		<SteppedNavigation
			steps={props.steps}
			activeIndex={props.activeIndex}
			hrefDone="/"
			exitText="Exit Tutorial"
		/>
	</div>
);

// PropTypes ensure we pass required props of the correct type
TutorialView.propTypes = {
	activeIndex: PropTypes.number.isRequired,
	steps: PropTypes.arrayOf(PropTypes.shape({
		index: PropTypes.number.isRequired,
		path: PropTypes.string.isRequired,
		bodyComponent: PropTypes.func.isRequired,
	})).isRequired,
};

export default TutorialView;
