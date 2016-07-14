"use strict";

import { EventEmitter } from 'events';
import actionConstants from './action_constants';
import dispatcher from './dispatcher';

let info = {
};

const Store = Object.assign({}, EventEmitter.prototype, {
	CHANGE_EVENT: "Symbol",

	addChangeListener(callback) {
		this.on(this.CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(this.CHANGE_EVENT, callback);
	},

	emitChange() {
		this.emit(this.CHANGE_EVENT);
	}
});

function handleChange(action) {
	switch(action.type) {
	}

	Store.emitChange();
}

dispatcher.register(handleChange);

module.exports = Store;
