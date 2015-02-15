//     mwb.js 0.0.1

//     (c) 2015 Byunghwa Yoo, Hana Lee
//     Milk White Board may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://jquery.mwb.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define([
		'jquery',
		'backbone',
		'exports',
		'react',
		'jsx!../../src/components/basicTools'
	], function( $, Backbone, exports, React, BasicTools ) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, $, Backbone, React, BasicTools );
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, MilkWhiteBoard, $, Backbone, React, BasicTools ) {

    var defaultOptions = {
        width: 400,
        height: 300
    };

	$.fn.mwb = function( options ) {
        options = _.extend({}, defaultOptions, options );

		var box = new BasicTools();
		React.render( box, document.body );
	};

	return MilkWhiteBoard;
}));
