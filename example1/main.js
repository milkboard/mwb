requirejs.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.11.2.min',
		'mwb': '../../src/mwb'
	}
});

require([
	'jquery',
	'mwb'
], function($, React, HelloView) {
	$( '#mwbArea' ).mwb({ width: 500, height: 400 });
});
