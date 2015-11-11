var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

// Define action methods
var mainActions = {

	reloadDashboard: function(data) {
	  	AppDispatcher.handleAction({
	    	actionType 	: ActionConstants.DASHBOARD,
	    	data 		: data
	  	})
	},

};

module.exports = mainActions;
