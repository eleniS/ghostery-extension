/**
 * Stepped Navigation Component
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
import { NavLink } from 'react-router-dom';

/**
 * @class Implement the Stepped Navigation for the Ghostery Hub
 * @extends Component
 * @memberof HubComponents
 */
class SteppedNavigation extends Component {
	/**
	 * A helper function for rendering the Navigation Exit Button
	 * @return {JSX} JSX for the Navigation Exit Button
	 */
	_renderNavExit() {
		const {
			steps,
			activeIndex,
			hrefDone,
			exitText
		} = this.props;
		if (activeIndex === steps[steps.length - 1].index) {
			return <div />;
		}
		return (
			<NavLink to={hrefDone} className="SteppedNavigation__exit flex-container align-middle">
				{exitText && (
					<span className="SteppedNavigation__exitText">{exitText}</span>
				)}
				<span className="SteppedNavigation__exitIcon" />
			</NavLink>
		);
	}

	/**
	 * A helper function for rendering the Navigation Back Button
	 * @return {JSX} JSX for the Navigation Back Button
	 */
	_renderNavBack() {
		const { steps, activeIndex } = this.props;
		if (activeIndex === steps[0].index) {
			return <div className="SteppedNavigation__buttonContainer" />;
		}

		const activeStepIndex = steps.findIndex(step => step.index === activeIndex);
		const previousStep = steps[activeStepIndex - 1];
		if (activeStepIndex === -1 || !previousStep) {
			return <div className="SteppedNavigation__buttonContainer" />;
		}
		return (
			<div className="SteppedNavigation__buttonContainer flex-container align-center-middle">
				<NavLink className="button hollow primary" to={previousStep.path}>
					Previous
				</NavLink>
			</div>
		);
	}

	/**
	 * A helper function for rendering the Navigation Forward Button
	 * @return {JSX} JSX for the Navigation Forward Button
	 */
	_renderNavForward() {
		const { steps, activeIndex, hrefDone } = this.props;
		if (activeIndex === steps[steps.length - 1].index) {
			return (
				<div className="SteppedNavigation__buttonContainer flex-container align-center-middle">
					<NavLink className="button primary" to={hrefDone}>
						Done
					</NavLink>
				</div>
			);
		}

		const activeStepIndex = steps.findIndex(step => step.index === activeIndex);
		const nextStep = steps[activeStepIndex + 1];
		if (activeStepIndex === -1 || !nextStep) {
			return <div className="SteppedNavigation__buttonContainer" />;
		}

		return (
			<div className="SteppedNavigation__buttonContainer flex-container align-center-middle">
				<NavLink className="button primary" to={nextStep.path}>
					Next
				</NavLink>
			</div>
		);
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Stepped Navigation of the Hub app
	 */
	render() {
		const { steps, activeIndex } = this.props;

		if (!steps.length) {
			return <div className="SteppedNavigation__isNull" />;
		}

		return (
			<div>
				{this._renderNavExit()}
				<div className="SteppedNavigation flex-container">
					<div className="flex-child-grow flex-container flex-dir-row-reverse">
						{this._renderNavBack()}
					</div>
					<div className="SteppedNavigation__circles flex-container align-center-middle">
						{steps.map(step => ((activeIndex === step.index) ?
							<a className="active" key={`nav-${step.index}`} /> : // eslint-disable-line jsx-a11y/anchor-has-content
							<NavLink to={step.path} key={`nav-${step.index}`} /> // ^ Use <a> without an href prop to prevent a call to history with the same URL
						))}
					</div>
					<div className="flex-child-grow">
						{this._renderNavForward()}
					</div>
				</div>
			</div>
		);
	}
}

// PropTypes ensure we pass required props of the correct type
SteppedNavigation.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		index: PropTypes.number.isRequired,
		path: PropTypes.string.isRequired,
	})).isRequired,
	activeIndex: PropTypes.number.isRequired,
	hrefDone: PropTypes.string.isRequired,
	exitText: PropTypes.string.isRequired,
};

export default SteppedNavigation;
