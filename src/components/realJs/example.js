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
	
	var HelloList = React.createClass({displayName: "HelloList",
		render: function() {
			return(
				React.createElement("div", null, 
					React.createElement(Hello, null), 
					React.createElement(Hello, null)
				)
			);
		}
	});
	
	var Hello = React.createClass({displayName: "Hello",
		render: function() {
		  return React.createElement("p", null, "Hello World");
		}
	});
	
	return ViewRoot;
});