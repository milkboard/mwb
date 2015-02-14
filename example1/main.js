requirejs.config({
	baseUrl: 'js',
	paths: {
		'react': '../lib/react/react-with-addons',
		'backbone': '../lib/backbone/backbone-min',
		'underscore': '../lib/underscore/underscore-min',
		'JSXTransformer': '../lib/react/JSXTransformer',
		'jquery': 'http://code.jquery.com/jquery-1.11.2.min',
		'jsx': '../lib/react/jsx',
		'text': '../lib/requirejs/text'
	},
	jsx: {
		fileExtension: '.jsx',
		harmoney: true,
		stripTypes: true
	}
});

require([
	'jquery',
	'react',
	'jsx!../../src/components/example'
], function($, React, HelloView) {
	var h = new HelloView();
	$('body').html(h.render().$el);
});