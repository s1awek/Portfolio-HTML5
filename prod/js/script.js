$(function () {
	'use strict';
	//Activate tooltips for Bootstrap
	$('[data-toggle="tooltip"]').tooltip();

	//Slick carousel
	$('.row-carousel').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-chevron-right"></i></button>',
		prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-chevron-left"></i></button>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	//Ekko lightbox
	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox({
			alwaysShowClose: true
		});
	});

	//Smooth scroling to anchors
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});
	//Animations
	AOS.init({
		duration: 1200
	});
	//Change language based on browser language and cookie set by user
	var language;
	if($.cookie('lang')) {
		language = $.cookie('lang');
		$('html').attr('lang', language);
	} else {
		if(navigator.language.toLocaleLowerCase().indexOf('pl') !== -1) {
			$('html').attr('lang', 'pl');
			window.document.title = 'Twoje Miejsce W Internecie';
		} else {
			$('html').attr('lang', 'en');
			window.document.title = 'Your Place on the Internet';
		}
		language = $('html').attr('lang');
		$.cookie('lang', language);
		language = $.cookie('lang');
	}

	$('.nav-item__language .nav-link').on('click', function(e) {
		e.preventDefault();
		if($('html').attr('lang') === 'en' ) {
			$.cookie('lang', 'pl');
			language = $.cookie('lang');
			$('html').attr('lang', language);
			window.document.title = 'Twoje Miejsce W Internecie';
		} else {
			$.cookie('lang', 'en');
			language = $.cookie('lang');
			$('html').attr('lang', language);
			window.document.title = 'Your Place on the Internet';
		}
	});
	//Reveal phone number
	if($('.info-item__link .phone-number').length){
		$('.info-item__link .phone-number').on('click', function(e){
			if($(this).parent('a').attr('href') === '#') {
				e.preventDefault();
				var a = '+48';
				var b = '519';
				var c = '458';
				var d = '310';
				var phoneNo = a + b + c + d;
				var phoneNoReadable = '(' + a + ') ' + b + '-' + c + '-' + d;
				$(this).parent('a').attr('href', 'tel:' + phoneNo);
				$(this).find('span').text(phoneNoReadable);		
			}	
		});
	}
	//Reveal email 
	if($('.info-item__link .email').length){
		$('.info-item__link .email').on('click', function(e){
			if($(this).parent('a').attr('href') === '#') {
				e.preventDefault();
				var a = 'hello';
				var b = '@';
				var c = 'wellmade.';
				var d = 'online';
				var email = a + b + c + d;
				$(this).parent('a').attr('href', 'mailto:' + email);
				$(this).find('span').text(email);
			}			
		});
	}
});