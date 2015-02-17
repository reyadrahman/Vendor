$(document).ready(function() {

	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
	//menu toggle
	$('[data-toggle=offcanvas]').click(function() {
		var parsedCssValue = parseInt($('.row-offcanvas').css('right')); //returns 20
		if(parsedCssValue=="300"){
			$('.row-offcanvas').toggleClass('active').animate({"right":"0px"}, "slow");;
		}else{
			$('.row-offcanvas').toggleClass('active').animate({"right":"300px"}, "slow");;
		}
	});
	//banner
	$('.banner,.carousel .item').height((viewport_height));
	$(window).resize(function() {
	  var viewport_width = window.innerWidth;
	  var viewport_height = window.innerHeight;
		$('.banner,.carousel .item').height((viewport_height));
	});	
	//animate scroll down icon
	reanimate();
	function reanimate(){
		$('.scroll_down').animate({bottom:40},1000).animate({bottom:55},1000, function(){
			setTimeout(reanimate, 2000);
		});
	}
	//menu scroll links
	$('.sidebar-offcanvas a[href*=#]:not([href=#]),.scroll_down a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[class=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
	});

	$('.navigation a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('section.' + this.hash.slice(1) );
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 110
			}, 1350);
			return false;
		  }
		}
	});

	$('section').waypoint(function(direction) {
		  var target = $(this).attr("data-id");
		  $(".navigation li a.active").removeClass();
		  $(".navigation li a[href='#"+target+"']").addClass("active");
	}, { offset: 220 });

    /* Backstrech logic */
    $(".js-backstrech").each(function() {
         $(this).backstretch($(this).attr("data-image"));
    })
	
	//stick menu to top
     $(function() {
            var offset = $(".list-group-holder").offset();
            var topPadding = 15;
            $(window).scroll(function(obj) {

            	var current_position = $(this).scrollTop();
            	if($(".list-group-holder").length > 0) {
	                if (current_position > offset.top) {
	                    $(".list-group-holder").stop().animate({
	                        marginTop: current_position - offset.top + topPadding
	                    });
	                } else {
	                    $(".list-group-holder").stop().animate({
	                        marginTop: 0
	                    });
	                };
           		 }
                if (current_position > $(".banner").height()) {
                    $(".navigation-holder").addClass("fixed");
                    $(".banner").css({
                    	"margin-bottom": $(".navigation-holder").height()+"px"
                    });
                } else {
                    $(".navigation-holder").removeClass("fixed");
                    $(".banner").css({
                    	"margin-bottom": "0px"
                    });
                };

            });
        });
	/* waypoints
	--------------------------*/
	//chart
	$('.chart').waypoint(function(event, direction) {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			barColor:'#545ec4',
			trackColor:'#ccc',
            scaleColor:false,
            lineWidth:2,
			size:191,
            lineCap:'circle',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	},{
	  triggerOnce: true,
	  offset: 'bottom-in-view'
	});
	//parallax bg image scroll
	$('.whatwedo .digitalsolutions').parallax("45%", 0.02);
	$('.whatwedo .digitalsolutions .bg2').parallax("50%", 0.03);
	//tabs
	$('.workprocess a:first').tab('show');
	$('.features a:first').tab('show');
	$('.happycustomers .nav-tabs a:first').tab('show');
	// auto tabs
	var tabChange = function(){
		var tabs = $('.happycustomers .nav-tabs > li');
		var active = tabs.filter('.active');
		var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
		// Use the Bootsrap tab show method
		next.tab('show')
	}
	$('#rootwizard').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	$('#rootwizard1').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	$('#rootwizard2').bootstrapWizard({'nextSelector': '.button-next', 'previousSelector': '.button-previous'});
	var tabCycle = setInterval(tabChange, 5000)
	$(this).find('.happycustomers .nav-tabs a').click(function(e) {
		e.preventDefault();
		clearInterval(tabCycle);
		$(this).tab('show')
	});
	//recent design work
	var owl = $("#rdw");
	owl.owlCarousel({
		autoPlay: false, //Set AutoPlay to 3 seconds
		stopOnHover:true,
		items : 6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [979,6],
		pagination: false
	});
	// Custom Navigation Events
	$(".carouseltop .right").click(function(){
		owl.trigger('owl.next');
	});
	$(".carouseltop .left").click(function(){
		owl.trigger('owl.prev');
	});
	//image overlay
	$('.item').hover(function() {
		//Display the caption
		$(this).find('div.owlcaption').stop(false,true).fadeIn(200);
	},
	function() {
		//Hide the caption
		$(this).find('div.owlcaption').stop(false,true).fadeOut(200);
	});
	//show hide form on mail button click
	$('#mailbtn').on('click', function(){
		if ($('#mailbtn').hasClass('active')) {
			$( "#mailbtn" ).removeClass( "active" );
		}else{
        	$( "#mailbtn" ).addClass( "active" );
		}
		$(".cform").slideToggle(function() {
		    /* Backstrech logic */
		    $(".js-backstrech").each(function() {
		         $(this).backstretch($(this).attr("data-image"));
		    })
		});

		return false;
	});

	/* Stellar */
	$.stellar();

   /* Portfolio */
	  if ($.fn.mixitup) {
	      $('#grid').mixitup( {
	        filterSelector: '.filter-item'
	      } );
	      $(".filter-item").click(function(e) {
	      	e.preventDefault();
	      })
	  }

  /* Portfolio items */
  $(".portfolio-item").click( function() {
  	var item_number = Math.floor(Math.random() * 3) + 1
  	console.log(item_number);
	$.get( "portfolio_item_"+item_number+".html", function( data ) {
		$( ".js-portfolio-data" ).html( data ).slideDown("slow", function() {
			  $("#owl-portfolio").owlCarousel({
			 
			      navigation : false, // Show next and prev buttons
			      slideSpeed : 1700,
			      paginationSpeed : 400,
			      singleItem:true,
			      responsive: true,
			     //Pagination
			      pagination : true,
			      paginationNumbers: false,
			      // "singleItem:true" is a shortcut for:
			      // items : 1, 
			      // itemsDesktop : false,
			      // itemsDesktopSmall : false,
			      // itemsTablet: false,
			      // itemsMobile : false
			 
			  });
		});
		$('html,body').animate({
		  scrollTop: $( ".js-portfolio-data" ).offset().top - 100
		}, 1500);
	});
  });

	$(".contact-form").submit(function() {

	    var url = $(this).attr("action"); // the script where you handle the form input.

	    $.ajax({
	           type: "POST",
	           url: url,
	           data: $(".contact-form").serialize(), // serializes the form's elements.
	           success: function(data)
	           {
	               $(".contact-form").html(data);
	           }
	         });

	    return false; // avoid to execute the actual submit of the form.
	});

  $("body").on('click', '.js-close-portfolio-details', function(e) {
  	e.preventDefault();
  	$( ".js-portfolio-data" ).slideUp( 1500, function() {
		$('html,body').animate({
		  scrollTop: $( "section.work" ).offset().top - 100
		}, 1500);
  	} );

  });

    /* Faces */
    $(".faces ul li").click( function() {
    	var target = $(this).attr("data-target");
    	$(".faces ul li.active").removeClass("active");
    	$(this).addClass("active");
    	$(".faces-content .face.active").slideUp("slow", function() {
    		$(this).removeClass("active");
    		$("[data-face='"+target+"']").slideDown('slow').addClass("active");

    	});
    });

  $("#owl-our-clients, .owl-carousel-blog, .use-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 1700,
      paginationSpeed : 400,
      singleItem:true,
      responsive: true,
     //Pagination
      pagination : true,
      paginationNumbers: false,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  /* Responsive navigation */ 
  $(".open-navigation a").click(function(e) {
  	e.preventDefault();
  	$(".navigation-holder ul.navigation").slideToggle('slow');
  });

  if (viewport_width < 900) {
  	$(".navigation-holder ul.navigation a").click(function(e) {
  		e.preventDefault();
	  	$(".navigation-holder ul.navigation").slideToggle('slow');
  	});
  };

});

$( window ).resize(function() {
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
	$('.banner').height((viewport_height));
	$(window).resize(function() {
	  var viewport_width = window.innerWidth;
	  var viewport_height = window.innerHeight;
		$('.banner').height((viewport_height));
	});
});

$(window).load(function() {
    /* Features line */
    var line_height = $(".features").height();
    $(".features-line .line").css({
    	"height" : line_height-$(".feature").height()+"px"
    });

    /* Team social media height */
    var social_height = $(".faces-content").height();
    $(".faces-social").css({
    	"height" : social_height+"px"
    });

});

//functions

