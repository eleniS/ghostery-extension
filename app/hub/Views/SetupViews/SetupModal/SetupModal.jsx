/**
 * Setup Modal Component
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
import PropTypes from 'prop-types';

const SetupModal = props => (
	<div>
		{ props.show && (
			<div>
				<div className="SetupModal__background" onClick={props.toggle} />
				<div className="SetupModal__container flex-container align-center-middle">
					<div className="SetupModal__content flex-container flex-dir-column align-middle">
						{props.showClose && (
							<div className="SetupModal__exit" onClick={props.toggle} />
						)}
						<div className="SetupModal__image" />
						<div className="SetupModal__text flex-child-grow">
							{props.text}
						</div>
						{props.children}
					</div>
				</div>
			</div>
		)}
	</div>
);

// PropTypes ensure we pass required props of the correct type
SetupModal.propTypes = {
	show: PropTypes.bool.isRequired,
	showClose: PropTypes.bool,
	text: PropTypes.string.isRequired,
	toggle: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
};

// Default props used for the Setup Modal
SetupModal.defaultProps = {
	showClose: false,
};

export default SetupModal;
