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
import { Link, Route } from 'react-router-dom';

// Components
import SteppedNavigation from '../SteppedNavigation';

// Component Views
import SetupBlockingView from '../SetupViews/SetupBlockingView';
import SetupAntiSuiteView from '../SetupViews/SetupAntiSuiteView';
import SetupHumanWebView from '../SetupViews/SetupHumanWebView';
import SetupDoneView from '../SetupViews/SetupDoneView';

/**
 * @class Implement the Setup View for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SetupView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Ghostery Hub - Setup',
			steps: [
				{ index: 1, path: '/setup/1', component: SetupBlockingView },
				{ index: 2, path: '/setup/2', component: SetupAntiSuiteView },
				{ index: 3, path: '/setup/3', component: SetupHumanWebView },
				{ index: 4, path: '/setup/4', component: SetupDoneView },
			],
		};
	}

	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const { title } = this.state;
		window.document.title = title;
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Setup View of the Hub app
	 */
	render() {
		const { steps } = this.state;
		const activeIndex = +this.props.location.pathname.split('/').pop();

		return (
			<div className="full-height flex-container flex-dir-column">
				<div className="flex-child-grow">
					{steps.map(step => <Route key={`route-${step.index}`} path={step.path} component={step.component} />)}
				</div>

				<SteppedNavigation
					steps={steps}
					activeIndex={activeIndex}
					hrefDone="/"
					exitText="Exit Custom Setup"
				/>
			</div>
		);
	}
}

export default SetupView;
