var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var actionConstants = require('../constants/ActionConstants');
var _ = require('underscore');
var $ = require('jquery');

var _UserData = {}, _Travelers = {};

var _errorSignin = false, _loadDashboard = false;

function setSigninForm(data, errorState) {
    if (data != '') {
        _UserData = {
            id   : data.id,
            name : data.name,
            token: data.token
        }
        _errorSignin = false;
    } else {
        _UserData = {};
        _errorSignin = true;
    }
    mainStore.emitMainPage();
}

function getTravelers() {
    if (!_.isEmpty(_UserData)) {
        _loadDashboard = true;
        mainStore.emitDashboard();
        $.ajax({
            type: 'GET',
            url: 'https://young-beyond-8772.herokuapp.com/travelers',
            beforeSend: function (xhr) { xhr.setRequestHeader ('Authorization', 'Token token=' + _UserData.token) },
            success: function(data) {
                var travelers = data;
                for (var i in travelers) {
                    travelers[i].show = false;
                }
                _Travelers = travelers;
                _loadDashboard = false;
                mainStore.emitDashboard();
            },
            error: function() {
                _Travelers = {};
                _loadDashboard = false;
                mainStore.emitDashboard();
            }
        });
    }
}

function updateTravelers(id, send) {
    //PATCH requests to the /travelers/:id endpoint update the entire destination list of the traveler
    //(who is identified by the id), and return the traveler object including his or her id and the updated list of destinations
    // if successful. Note that this request only succeeds if the traveler identified by :id is also the owner of the auth token in the request header.
    if (!_.isEmpty(_UserData)) {
        _loadDashboard = true;
        mainStore.emitDashboard();
        send = JSON.stringify(send);
        $.ajax({
            type: 'PATCH',
            url: 'https://young-beyond-8772.herokuapp.com/travelers/' + id,
            data: { 'destinations': send},
            beforeSend: function (xhr) { xhr.setRequestHeader ('Authorization', 'Token token=' + _UserData.token) },
            success: function(data) {
                _loadDashboard = false;
                mainStore.emitDashboard();
            },
            error: function() {
                _loadDashboard = false;
                mainStore.emitDashboard();
            }
        });
    }
}

var mainStore = _.extend({}, EventEmitter.prototype, {
    getMainPageState: function() {
        return {
            userdata   : _UserData,
            errorSignin: _errorSignin
        }
    },
    getDashboardState: function() {
        return {
            travelers: _Travelers,
            loading  : _loadDashboard
        }
    },
    toggleItem: function(index) {
        _Travelers[index].show = !_Travelers[index].show;
        mainStore.emitDashboard();
    },
    checkItem: function(traveler, index) {
        _Travelers[traveler].destinations[index].visited = !_Travelers[traveler].destinations[index].visited;
        updateTravelers(_Travelers[traveler].id, _Travelers[traveler].destinations);
    },
    removeItem: function(traveler, index) {
        _Travelers[traveler].destinations.splice(index, 1);
        updateTravelers(_Travelers[traveler].id, _Travelers[traveler].destinations);
    },
    addPlace: function(traveler, place) {console.log(place)
        _Travelers[traveler].destinations.push({
            name       : place,
            visited    : false
        });
        updateTravelers(_Travelers[traveler].id, _Travelers[traveler].destinations);
    },
    submitSignIn: function(username) {
        // POST requests to the /auth endpoint log the traveler in and return their authentication bits.
        $.ajax({
            type: 'POST',
            url: 'https://young-beyond-8772.herokuapp.com/auth',
            data: {'name': username},
            success: function(data) {
                setSigninForm(data, false);
            },
            error: function() {
                setSigninForm('', true);
            }
        });
    },
    logout: function() {
        _UserData = {};
        mainStore.emitMainPage();
    },
    // Add change listener
    addMainPage: function(callback) {
        this.on('main_page', callback);
    },
    // Remove change listener
    removeMainPage: function(callback) {
        this.removeListener('main_page', callback);
    },
    // Emit
    emitMainPage: function() {
        this.emit('main_page');
    },
    // Add change listener
    addDashboard: function(callback) {
        this.on('dashboard', callback);
    },
    // Remove change listener
    removeDashboard: function(callback) {
        this.removeListener('dashboard', callback);
    },
    // Emit
    emitDashboard: function() {
        this.emit('dashboard');
    }
});

mainStore.setMaxListeners(500);

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case actionConstants.DASHBOARD:
            getTravelers(action.data);
            break;
        default:
            return true;
    }
    return true;
});

module.exports = mainStore;
