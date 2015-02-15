/*global define*/
/*jshint browser:true, boss:true, latedef:false, undef:true, devel:true, unused:strict*/

define([

	'react',
	'jquery',
	'underscore',
	'backbone',	

], function( React, $, _, Backbone ) {

	var Box = React.createClass({
		displayName: "Hello",
		style: {
			width: 500,
			height: 400,
			background: 'red',
			opacity: 0.5
		},
		render: function() {
			return (React.createElement("div", {style: this.style}));
		}
	});
	
	return Box;
});
