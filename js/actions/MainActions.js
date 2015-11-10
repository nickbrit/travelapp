var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

// Define action methods
var mainActions = {

	load: function(pageType) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.PRELOAD,
	    	pageType: pageType
	  	})
	},

	onPopstate: function(pageType) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.ON_POPSTATE,
	    	pageType: pageType
	  	})
	},

	showModule: function(moduleType) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SHOW_MODULE,
	    	moduleType: moduleType
	  	})
	},

	showTickets: function(openForm) {
	  	AppDispatcher.handleAction({
	    	actionType 	: ActionConstants.SHOW_TICKETS,
	    	openForm 	: openForm
	  	})
	},

	showFileManager: function(data) {
	  	AppDispatcher.handleAction({
	    	actionType 	: ActionConstants.SHOW_FILEMANAGER,
	    	data 		: data
	  	})
	},

	showViewWindow: function(data) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SHOW_VIEW_WINDOW,
	    	data: data
	  	})
	},

	closeViewWindow: function() {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.CLOSE_VIEW_WINDOW
	  	})
	},

	setPage: function(pageType, extraUrl) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SET_PAGE,
	    	pageType: pageType,
	    	extraUrl: extraUrl
	  	})
	},

	closeModule: function() {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.CLOSE_MODULE
	  	})
	},

	signIn: function(userData, userForm) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SIGN_IN,
	    	userData: userData,
	    	userForm: userForm
	  	})
	},

	signInFB: function(response) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SIGN_IN_FB,
	    	response: response
	  	})
	},

	signInGP: function(authResult) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.SIGN_IN_GP,
	    	authResult: authResult
	  	})
	},

	loadSupporters: function() {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.LOAD_KICKSTARTER
	  	})
	},

	follow: function(id, type, follow, callback) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.MAIN_FOLLOW,
	    	id 		: id,
	    	type 	: type,
	    	follow	: follow,
	    	callback: callback
	  	})
	},

	checkWelcomeWindow: function(data) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.WELCOME_WIN,
	    	data: data
	  	})
	},

	toggleImgLightbox: function(data) {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.TOGGLE_IMG_LIGHTBOX,
	    	data: data
	  	})
	},

	loadNotifications: function() {
	  	AppDispatcher.handleAction({
	    	actionType: ActionConstants.LOAD_NOTIFICATIONS
	  	})
	}

};

module.exports = mainActions;
