var React = require('react');
// ACTIONS
var mainActions = require('../actions/mainActions');
// STORES
var MainStore = require('../stores/MainStore');

//Components
var Spinner = require('./components/Spinner.react');

// Underscore
var _ = require('underscore');

function getMainStates() {
    var data = MainStore.getMainPageState();
    return {
        userdata   : data.userdata,
        errorSignin: data.errorSignin,
        loading    : false
    }
}

var MainApp = React.createClass({
    getInitialState: function() {
        return getMainStates();
    },
    submitForm: function(SigninName) {
        this.setState({loading: true});
        MainStore.submitSignIn(SigninName);
    },
    // Add change listeners to stores
    componentDidMount: function() {
        MainStore.addMainPage(this._onChange);
    },
    // Remove change listers from stores
    componentWillUnmount: function() {
        MainStore.removeMainPage(this._onChange);
    },
    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getMainStates());
    },
    render: function() {
        var isUser = !_.isEmpty(this.state.userdata); // check if user is logged
        return (
            <div className="container">
                { isUser ? <Usermenu name={this.state.userdata.name} /> : null }
                <h2 className="logo">Travel notes</h2>
                { isUser ? (
                    <Dashboard userdata={this.state.userdata} />
                ) : (
                    <SigninForm submitForm={this.submitForm} error={this.state.errorSignin} loading={this.state.loading} />
                ) }
            </div>
        )
    }
})

var Usermenu = React.createClass({
    logout: function() {
        MainStore.logout();
    },
    render: function() {
        return (
            <div className="usermenu">
                <ul>
                    <li>Hi, {this.props.name}!</li>
                    <li className="logout" onClick={this.logout}><i className="icon-font icon-logout"></i> Logout</li>
                </ul>
            </div>
        )
    }
})

var SigninForm = React.createClass({
    getInitialState: function() {
        return {
            inputName: '', //state for input value
            error    : false
        }
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({error: nextProps.error});
    },
    changeName: function(event) {
        // state input
        this.setState({
            inputName: event.target.value,
            error    : false
        });
    },
    handleKeyDown: function(event) {
        if (event.keyCode == 13 ) {
            // if Enter key submit form
            this.props.submitForm(this.state.inputName);
        }
    },
    submitForm: function() {
        this.props.submitForm(this.state.inputName);
    },
    render: function() {
        // this.props.error - for signin input
        return (
            <div className="signin-form">
                <h3>Sign in</h3>
                <div className={ this.state.inputName == '' ? "input-block input-block-empty" : "input-block" }>
                    {this.state.error ? <div className="error-tipsy">Ooops! Something wrong!</div> : null }
                    <label>Name</label>
                    <input type="text" onChange={this.changeName} onKeyDown={this.handleKeyDown} value={this.state.inputName} />
                    { this.state.inputName != '' ? <i className="icon-font icon-right" onClick={this.submitForm}></i> : null }
                    {this.props.loading ? <Spinner /> : null }
                </div>
            </div>
        )
    }
})

function getDashboardStates() {
    var data = MainStore.getDashboardState();
    return {
        loading  : data.loading,
        travelers: data.travelers
    }
}

var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            loading  : true,
            travelers: []
        }
    },
    toggleItem: function(index) {
        MainStore.toggleItem(index);
    },
    // Add change listeners to stores
    componentDidMount: function() {
        MainStore.addDashboard(this._onChange);
        mainActions.reloadDashboard();
    },
    // Remove change listers from stores
    componentWillUnmount: function() {
        MainStore.removeDashboard(this._onChange);
    },
    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getDashboardStates());
    },
    render: function() {
        // show travelers' blocks;
        if (this.state.travelers.length > 0) {
            var travelersNodes = this.state.travelers.map(function(traveler, index) {
                return (
                    <li className={ traveler.show ? "active" : "" } key={index}>
                        <div className="dashboard-header" onClick={this.toggleItem.bind(null, index)}>
                            <div className="dashboard-nav">
                                <i className="icon-font dashboard-toggle"></i>
                            </div>
                            {traveler.name}
                        </div>
                        { (traveler.destinations.length > 0) ? <Destinations index={index} destinations={traveler.destinations} show={traveler.show} /> : null }
                    </li>
                )
            }.bind(this));
        }
        return (
            <div className="dashboard-block">
                { this.state.travelers.length > 0 ? <ul>{travelersNodes}</ul> : null }
                { this.state.loading ? <div className="spinner-block"><Spinner /></div> : null }
            </div>
        )
    }
})

var Destinations = React.createClass({
    getInitialState: function() {
        return {
            showNewPlace: false // show Google Place input
        }
    },
    togglePlace: function(e) {
        e.preventDefault();
        this.setState({
            showNewPlace: !this.state.showNewPlace
        })
    },
    checkItem: function(index) {
        MainStore.checkItem(this.props.index, index);
    },
    removeItem: function(index) {
        MainStore.removeItem(this.props.index, index);
    },
    addPlace: function(place) {
        MainStore.addPlace(this.props.index, place);
    },
    render: function() {
        var destinationsNodes = this.props.destinations.map(function(destination, index) {
            return (
                <div className="dashboard-item" key={index}>
                    <i className={ destination.visited ? "icon-font icon-check checkbox" : "icon-font icon-check-empty checkbox" } onClick={this.checkItem.bind(null, index)}></i>
                    <span className={ destination.visited ? "through" : "" }>{destination.name}</span>
                    <i className="icon-font icon-cancel" onClick={this.removeItem.bind(null, index)}></i>
                </div>
            )
        }.bind(this));
        return (
            <div className={ this.props.show ? "dashboard-items" : "dashboard-items dashboard-items-hidden" }>
                {destinationsNodes}
                <div className="new-item">
                    <a href="#" onClick={this.togglePlace}>
                        {this.state.showNewPlace ? (
                            <span><i className="icon-font icon-minus"></i>Close new destination</span>
                        ) : (
                            <span><i className="icon-font icon-plus"></i>New destination</span>
                        ) }
                    </a>
                </div>
                { this.state.showNewPlace ? <GooglePlaces addPlace={this.addPlace} /> : null }
            </div>
        )
    }
})

var GooglePlaces = React.createClass({
    componentDidMount: function() {
        var that = this;
        // Google Places Input API
        var input = this.refs.searchField;
        var autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
              window.alert("Autocomplete's returned place contains no geometry");
              return;
            } else {
                that.props.addPlace(place.address_components[0].long_name);
            }
        });
    },
    render: function() {
        return (
            <div className="searchPlace">
                <input ref="searchField" type="text" size="50"/>
            </div>
        );
    }
});

module.exports = MainApp;