define([ 'underscore', 'jquery' ], function( _, $ ) {
    
    var defaultOptions = {
        width: 400,
        height: 300
    };
    
    $.fn.mwb = function( options ) {
        options = _.extend({}, defaultOptions, options );
        
    };
});
