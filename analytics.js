/**
 * @author lucas@pieui.com
 */

(function() {
	var w = window;
	var d = document;
	
	// Expose a global method
	w._load_analytics = function(in_id) {
		attach_script(in_id);
	};
	
	function attach_script(account_id) {
		var gaJsSrc = (("https:" == d.location.protocol) ? "https://ssl." : "http://www.") + 'google-analytics.com/ga.js';
		var head = d.getElementsByTagName('head')[0];
		var scr = d.createElement('script');
		scr.setAttribute('type','text/javascript');
		scr.setAttribute('src',gaJsSrc);
		head.appendChild(scr);
		check_analytics(account_id);
	}
	
	function check_analytics(account_id) {
		if(typeof w['_gat'] == 'undefined') {
			setTimeout(function() {
				return (function() {
					check_analytics(account_id);
				})();
			},50);
		} else {
			start_analytics(account_id);
		}
	}
	
	function start_analytics(account_id) {
		w.pageTracker = _gat._getTracker(account_id);
		w.pageTracker._initData();
		w.pageTracker._trackPageview();
	}
	
})();
