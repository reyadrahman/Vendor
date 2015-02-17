(function($) {
	"use strict";

	var bodyW = $('body').width(),
		enableMenuAnimate = false;

	/*********************************************

		Window scroll

	*********************************************/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('#to-the-top').fadeIn();
			$('#vendor-header-menu').addClass('vendor-header-sticked');
			$('.vendor-content').css('padding-top', $('#vendor-header-menu').height() + 'px');
		} else {
			$('#to-the-top').fadeOut();
			$('#vendor-header-menu').removeClass('vendor-header-sticked');
			$('.vendor-content').css('padding-top', 0);
		}
	});
	$('#to-the-top').click(function() { $('body,html').animate({scrollTop: 0}, 500); });

	/*********************************************

		Typography Fix

	*********************************************/
	
	/*********************************************

		vendor Tabs

	*********************************************/
	
	/*********************************************

		vendor Message

	*********************************************/
	

	/*********************************************

		vendor Social Button 2

	*********************************************/
	

	/*********************************************

		vendor Toggle

	*********************************************/


	/*********************************************

		Top bar desktop menu

	*********************************************/
	

	/*********************************************

		Mobile Menu

	*********************************************/
	

	/*********************************************

		On Window Resize

	*********************************************/
	$( window ).resize(function() {
		vendorProject();
		vendorMegaMenu();
		bodyW = $('body').width();
		if (bodyW > 768 && bodyW < 992) {
			$('section .col-sm-6').css('margin-top', '60px').eq(0).css('margin-top', '0px').end().eq(1).css('margin-top', '0px');
			//$('.vendor-footer .col-sm-6').css('margin-top', '60px').eq(0).css('margin-top', '0px').end().eq(1).css('margin-top', '0px');
		} else {
			$('section .col-sm-6, .vendor-footer .col-sm-6').css('margin-top', '0px');
		}
		if (bodyW < 768) {
			$('.vendor-feature').last().css('margin-bottom', '0px');
		}
		vendorAnimateSkill();
		if ($(window).height() < 900)
			$('.vendor-content-404 .vendor-soc-buttons-list').css('position','relative');
	    $('.vendor-projects-listing').each(function() {
	    	var $this = $(this),
	    		offset = parseInt($this.find('.vendor-listing-item').css('padding-left')),
	    		w = parseInt($this.parents('[class*="col-"]').width()), h,
    			$elems = $this.find('.vendor-listing-item');
	    	$this.css({
	    		'margin-left' : -offset,
	    		'width' : w + offset
	    	});
	    	if ($this.hasClass('vendor-projects-listing-3-cols')) {
	    		if (bodyW < 768) {
		    		$elems.width(w);
	    		}
	    		if (bodyW > 768 && bodyW < 992) {
	    			$elems.width((w  + offset)/2 - offset);
	    		}
	    		if (bodyW > 992) {
	    			$elems.width((w  + offset)/3 - offset);
	    		}
	    	}
	    	if ($this.hasClass('vendor-projects-listing-4-cols')) {
	    		if (bodyW < 768) {
		    		$elems.width(w);
	    		}
	    		if (bodyW > 768 && bodyW < 992) {
	    			$elems.width((w  + offset)/2 - offset);
	    		}
	    		if (bodyW > 992) {
	    			$elems.width((w  + offset)/4 - offset);
	    		}
	    	}
	    	if ($this.hasClass('vendor-projects-listing-5-cols')) {
	    		if (bodyW < 768) {
		    		$elems.width(w);
	    		}
	    		if (bodyW > 768 && bodyW < 992) {
	    			$elems.width((w  + offset)/2 - offset);
	    		}
	    		if (bodyW > 992) {
	    			$elems.width((w  + offset)/5 - offset);
	    		}
	    	}
	    });
	    $('.vendor-single-estate').each(function() {
	    	var $this = $(this),
	    		$details = $this.find('.vendor-propert-details'),
	    		w = parseInt($details.parents('[class*="col-"]').width());
	    	if (bodyW > 768) {
		    	$details.width(w/3 + 10).first().css('margin-left', '-31px');
		    	$details.find('.inner').css({'padding-left':'30px'});
	    	} else {
		    	$details.width(w).first().css('margin-left', '0px');
		    	$details.find('.inner').css({'padding-left':'0px', 'margin-bottom':'30px'});
		    	$details.last().find('.inner').css('margin-bottom', '0px');
			}
	    });
	});

})(jQuery);