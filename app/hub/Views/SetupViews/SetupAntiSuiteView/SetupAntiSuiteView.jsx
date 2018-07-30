/**
 * Setup Anti-Suite View Component
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
 * A Functional React component for rendering the Setup Anti-Suite View
 * @return {JSX} JSX for rendering the Setup Anti-Suite View of the Hub app
 * @memberof HubComponents
 */
const SetupAntiSuiteView = props => (
	<div className="row align-center">
		<div className="columns">
			{props.features.map((feature) => {
				const iconClassNames = ClassNames(feature.id, {
					active: feature.enabled,
				});

				return (
					<div key={`feature-${feature.id}`} className="row align-center-middle">
						<div className="columns shrink">
							<div className={iconClassNames} />
						</div>
						<div className="columns shrink" onClick={feature.toggle}>
							<div>{feature.enabled.toString()}</div>
						</div>
						<div className="columns small-12 large-8">
							<h4 className="display-inline">{feature.name}</h4>
							{feature.enabled && (
								<h6 className="display-inline">
									Enabled
								</h6>
							)}
							<div>{feature.description}</div>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

// PropTypes ensure we pass required props of the correct type
SetupAntiSuiteView.propTypes = {
	features: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		enabled: PropTypes.bool.isRequired,
		toggle: PropTypes.func.isRequired,
		icon: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	})).isRequired,
};

export default SetupAntiSuiteView;
