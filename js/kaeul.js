jQuery(document).ready(function() {
	var bodyOffset = jQuery('body').offset();
	jQuery(window).scroll(function() {
		if (jQuery(document).scrollTop() > bodyOffset.top) {
			jQuery('header').addClass('expand');
		} else {
			jQuery('header').removeClass('expand');
		}
	});
});
