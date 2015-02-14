define([ 'underscore', 'jquery', 'jsx!../../src/components/basicTools.js' ], function( _, $,Box ) {
    
    var defaultOptions = {
        width: 400,
        height: 300
    };
    
    $.fn.mwb = function( options ) {
        options = _.extend({}, defaultOptions, options );

		var box = new Box();
		React.render( box, document.body );
        
    };
});
