/**
 * Setup View Component
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
import SetupHeader from '../SetupViews/SetupHeader';

/**
 * A Functional React component for rendering the Setup View
 * @return {JSX} JSX for rendering the Setup View of the Hub app
 * @memberof HubComponents
 */
const SetupView = props => (
	<div className="full-height flex-container flex-dir-column">
		<div className="flex-child-grow">
			{props.steps.map(step => (
				<Route
					key={`route-${step.index}`}
					path={step.path}
					render={() => (
						<div>
							<SetupHeader {...step.headerProps} />
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
			exitText="Exit Custom Setup"
		/>
	</div>
);

// PropTypes ensure we pass required props of the correct type
SetupView.propTypes = {
	activeIndex: PropTypes.number.isRequired,
	steps: PropTypes.arrayOf(PropTypes.shape({
		index: PropTypes.number.isRequired,
		path: PropTypes.string.isRequired,
		bodyComponent: PropTypes.func.isRequired,
		headerProps: PropTypes.shape({
			title: PropTypes.string.isRequired,
			titleImage: PropTypes.string.isRequired,
		}).isRequired,
	})).isRequired,
};

export default SetupView;
