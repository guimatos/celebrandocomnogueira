$(document).ready(function() {

	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll
	/*  Thanks to: https://github.com/davist11/jQuery-One-Page-Nav
	/*-----------------------------------------------------------------------------------*/

	function smoothScroll(){
		$(".nav").onePageNav({
			filter: ':not(.external)',
			scrollSpeed: 1500
		});

		var formTarget = $(".js-form"); // Assign this class to corresponding section on Index.html

		// Scrolls to form section
		$(".js-scroll").on("click", function() {
			$('html, body').animate({
				scrollTop: formTarget.offset().top
			}, 2000);
			return false;
		});

		return false;
	}

	smoothScroll();

	/*-----------------------------------------------------------------------------------*/
	/*	Backstretch
	/*  Thanks to: http://srobbin.com/jquery-plugins/backstretch/
	/*-----------------------------------------------------------------------------------*/

	function backStrech() {
		$("aside").backstretch([
			"img/placeholder-y.jpg",
			"img/placeholder-x.jpg",
			// "img/placeholder-3.png",

			], {duration: 5000, fade: 1000});
	}

	backStrech();

	/*-----------------------------------------------------------------------------------*/
	/*	Flexslider
	/*  Thanks to: http://www.woothemes.com/flexslider/
	/*-----------------------------------------------------------------------------------*/

	function flexSlider(){
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			touch: true
		});
	}

	flexSlider();

	/*-----------------------------------------------------------------------------------*/
	/*	RSVP Form Validation + Submission
	/*-----------------------------------------------------------------------------------*/

	function rsvpFormSubmit() {

		// this is the id of the form
		var formID = $("#js-form");

		// submits form with ajax method
		formID.on("submit", function() {

			$.ajax({
				url: "mailer.php",
				type: "POST",
		        data: formID.serialize(), // serializes the form's elements.

		        success: function(data) {
		        	$(".js-display")
		        				.addClass("message-panel")
		        				.html(data); // show response from the php script.
		        }

		    });

		    return false; // avoid to execute the actual submit of the form.

		});

		// Show/Hide RSVP Menu selection on accept/decline
		$(".decline").on("click", function(){
			$(".rsvp-meal-choice").fadeOut();
		});
		$(".accept").on("click", function(){
			$(".rsvp-meal-choice").fadeIn();
		});

	}
	rsvpFormSubmit();


});