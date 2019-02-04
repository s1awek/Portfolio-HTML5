$(function () {
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
		$(this).ekkoLightbox();
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
		} else {
			$('html').attr('lang', 'en');
		}
		$.cookie('lang', $('html').attr('lang'));
		language = $.cookie('lang');
	}

	$('.nav-item__language .nav-link').on('click', function(e) {
		e.preventDefault();
		if($('html').attr('lang') === 'en' ) {
			$.cookie('lang', 'pl');
			language = $.cookie('lang');
			$('html').attr('lang', language);
		} else {
			$.cookie('lang', 'en');
			language = $.cookie('lang');
			$('html').attr('lang', language);
		}
	});
});