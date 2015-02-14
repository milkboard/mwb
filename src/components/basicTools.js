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
			background: 'red',
			opacity: 0.5
		},
		render: function() {
			return(
				<div style={this.style}>
				</div>
			);
		}
	});
	
	return Box;
});
