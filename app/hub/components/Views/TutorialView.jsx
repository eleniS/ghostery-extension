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
import { Link, Route } from 'react-router-dom';

// Components
import SteppedNavigation from '../SteppedNavigation';

// Component Views
import TutorialVideoView from '../TutorialViews/TutorialVideoView';
import TutorialTrackerListView from '../TutorialViews/TutorialTrackerListView';
import TutorialSimpleDetailedView from '../TutorialViews/TutorialSimpleDetailedView';
import TutorialBlockingView from '../TutorialViews/TutorialBlockingView';
import TutorialTrustRestrictView from '../TutorialViews/TutorialTrustRestrictView';
import TutorialAntiSuiteView from '../TutorialViews/TutorialAntiSuiteView';

/**
 * @class Implement the Tutorial View for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class TutorialView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Ghostery Hub - Tutorial',
			steps: [
				{ index: 1, path: '/tutorial/1', component: TutorialVideoView },
				{ index: 2, path: '/tutorial/2', component: TutorialTrackerListView },
				{ index: 3, path: '/tutorial/3', component: TutorialSimpleDetailedView },
				{ index: 4, path: '/tutorial/4', component: TutorialBlockingView },
				{ index: 5, path: '/tutorial/5', component: TutorialTrustRestrictView },
				{ index: 6, path: '/tutorial/6', component: TutorialAntiSuiteView },
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
	 * @return {JSX} JSX for rendering the Tutorial View of the Hub app
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
					exitText="Exit Tutorial"
				/>
			</div>
		);
	}
}

export default TutorialView;
