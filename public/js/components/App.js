"use strict";

import React from 'react';
import store from '../store';

function getState() {
	return {
	};
}

const App = React.createClass({
	getInitialState() {
		return getState();
	},

	componentDidMount() {
		store.addChangeListener(this.update);
	},

	componentWillUnmount() {
		store.removeChangeListener(this.update);
	},

	update() {
		this.setState(getState());
	},

	render() {
		return React.cloneElement(this.props.children, this.state);
	}
});

module.exports = App;
