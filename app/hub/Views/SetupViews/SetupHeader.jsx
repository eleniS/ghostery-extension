/**
 * Setup Header Component
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

/**
 * A Functional React component for rendering the Setup View
 * @return {JSX} JSX for rendering the Setup Header View of the Hub app
 * @memberof HubComponents
 */
const SetupHeader = props => (
	<div className="row align-center">
		<div className="columns">
			<div className="row align-middle align-center">
				<div className="columns shrink">
					<img src={props.titleImage} />
				</div>
				<div className="columns shrink">
					<h3 dangerouslySetInnerHTML={{ __html: props.title }} />
				</div>
			</div>
		</div>
	</div>
);

export default SetupHeader;
