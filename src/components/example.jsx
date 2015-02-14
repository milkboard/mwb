define([
'react',
'jquery',
'underscore',
'backbone',	
], function(React, $, _, Backbone) {
	var Hello = React.createClass({
		render: function() {
		  return <p>Hello World</p>;
		}
	});

	return Hello;
});