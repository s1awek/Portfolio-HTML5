$(function () {
	//Activate tooltips for Bootstrap
	$('[data-toggle="tooltip"]').tooltip();

	//Slick carousel
	$('.row-carousel').slick({
		infinite: true,
		autoplay: false,
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
					arrows: false,
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
});