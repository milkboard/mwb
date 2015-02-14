define([
'react',
'jquery',
'underscore',
'backbone',	
], function(React, $, _, Backbone) {
	var ViewRoot = Backbone.View.extend({
		tagName: "div",
		id: "ViewRoot",
		render: function() {
			this.$el.html('<div class="hello-container"></div>');
			React.render(new HelloList(), this.$('.hello-container').get(0));
			return this;
		}
	});
	
	var HelloList = React.createClass({
		render: function() {
			return(
				<div>
					<Hello />
					<Hello />
				</div>
			);
		}
	});
	
	var Hello = React.createClass({
		render: function() {
		  return <p>Hello World</p>;
		}
	});
	
	return ViewRoot;
});