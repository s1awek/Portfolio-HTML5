$(function () {
	//Activate tooltips for Bootstrap
	$('[data-toggle="tooltip"]').tooltip();

	//Slick carousel
	$('.row-carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	//Ekko lightbox
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
  });