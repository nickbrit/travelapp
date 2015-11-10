var React = require('react');
var MainApp = require('./components/MainApp.react');

// Render Group Controller View
window.onload = function() {
	React.render(
	  	<MainApp />,
	  	document.getElementById('app')
	);
}
