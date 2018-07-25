/**
 * Setup Blocking View Component
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
 * A Functional React component for rendering the Setup Blocking View
 * @return {JSX} JSX for rendering the Setup Blocking View of the Hub app
 * @memberof HubComponents
 */
const SetupBlockingView = props => (
	<div className="row small-up-1 medium-up-2 large-up-4">
		{props.choices.map((choice) => {
			const choiceClassNames = ClassNames({
				SetupBlocking__choice: true,
				'SetupBlocking--selected': choice.name === props.blockingPolicy,
			});
			const imageContainerClassNames = ClassNames({
				SetupBlocking__imageContainer: true,
			});

			return (
				<div key={`block-value${choice.name}`} className="columns">
					<div className={choiceClassNames}>
						<div className={imageContainerClassNames}>
							<label
								htmlFor={`input-block-${choice.name}`}
								className="flex-container align-center-middle"
							>
								<img src={choice.image} />
							</label>
							<input
								type="radio"
								name={choice.name}
								value={choice.name}
								id={`input-block-${choice.name}`}
								checked={props.blockingPolicy === choice.name}
								onChange={props.handleSelection}
							/>
						</div>
						<div className="SetupBlocking__text flex-container align-center-middle">
							<span>{choice.text}</span>
						</div>
					</div>
				</div>
			);
		})}
	</div>
);

// PropTypes ensure we pass required props of the correct type
SetupBlockingView.propTypes = {
	blockingPolicy: PropTypes.string.isRequired,
	handleSelection: PropTypes.func.isRequired,
	choices: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})).isRequired,
};

export default SetupBlockingView;
