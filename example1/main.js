requirejs.config({
	baseUrl: 'js',
	jsx: {
		fileExtension: '.jsx'
	},
	paths: {
		jquery: 'http://code.jquery.com/jquery-1.11.2.min',
		underscore: '../lib/underscore/underscore-min',
		backbone: '../lib/backbone/backbone-min',
		mwb: '../../src/mwb',
		react: '../lib/react/react.min',
		jsx: '../lib/react/jsx',
		JSXTransformer: '../lib/react/JSXTransformer',
		text: '../lib/requirejs/text'
	}
});

require([
	'jquery',
	'mwb'
], function($, Mwb ) {
	$( '#mwbArea' ).mwb({ width: 500, height: 400 });
});
