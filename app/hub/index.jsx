/**
 * Ghostery Hub React App Init
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2018 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 *
 * @namespace HubComponents
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Components
import App from './components/App';

// Containers
import HomeView from './components/Views/HomeView';
import SetupView from './components/Views/SetupView';
import TutorialView from './components/Views/TutorialView';
import SupporterView from './components/Views/SupporterView';
import RewardsView from './components/Views/RewardsView';
import ProductsView from './components/Views/ProductsView';
import CreateAccountView from './components/Views/CreateAccountView';
import LogInView from './components/Views/LogInView';

const store = configureStore();

/**
 * Top-Level Component for the Ghostery Hub
 * @memberof HubComponents
 */
const Hub = () => (
	<App store={store}>
		<Route exact path="/" component={HomeView} />
		<Route path="/setup" component={SetupView} />
		<Route path="/tutorial" component={TutorialView} />
		<Route exact path="/supporter" component={SupporterView} />
		<Route exact path="/rewards" component={RewardsView} />
		<Route exact path="/products" component={ProductsView} />
		<Route exact path="/create-account" component={CreateAccountView} />
		<Route exact path="/log-in" component={LogInView} />
	</App>
);

ReactDOM.render(
	(
		<Provider store={store}>
			<Router hashType="noslash">
				<Hub />
			</Router>
		</Provider>
	), document.getElementById('root'),
);
