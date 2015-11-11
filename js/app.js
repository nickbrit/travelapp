var React = require('react');
var ReactDOM = require('react-dom');
var MainApp = require('./components/MainApp.react');

// Render Group Controller View
window.onload = function() {
	ReactDOM.render(
	  	<MainApp />,
	  	document.getElementById('app')
	);
}
