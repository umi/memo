/*
 * jQuery extlog
 *
 * Copyright 2012 f-disc.com
 * Author umi
 * April 2012
 */
(function($, c){
	$.extlog = function(f){
		if (!c) {c = window.console = {log: function(){}};};
		var l = (function(l){return function(){return l.apply(this, arguments)};})(c.log);
		c.log = function(){
			l.apply(c, arguments);
			f(arguments);
		};
	};
})(jQuery, window.console);
