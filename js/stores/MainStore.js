var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var actionConstants = require('../constants/ActionConstants');
var _ = require('underscore');

var mainStore = _.extend({}, EventEmitter.prototype, {
});

mainStore.setMaxListeners(500);

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        default:
            return true;
    }
    return true;
});

module.exports = mainStore;
