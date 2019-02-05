// home-header-text-carousel start
(function homeHeaderTextCarousel() {
	$('.header-banner-imgs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
        swipe: false,
	})
}());
$(document).ready(function () {
	try {
		console.log('dgds' + $(window).width())
		if ($(window).width() < 765) {
			$(document).ready(function () {
				// slick slider
				$('.different-fields').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 800,
					dots: true,
					slidesToShow: 1,
					infinite:true,
					arrows: false,
				})
            });
            $(document).ready(function () {
				// slick slider
				$('.neurofeedback-is-it-for-list').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 800,
					dots: true,
					slidesToShow: 1,
					infinite:true,
					arrows: false,
				})
            });
            // tabs navigation start
                (function tabsNavigation() {
                $('.tabs').click(function () {
                    var tabContainer = $('.tabs').closest('.tab-container')
                    $(tabContainer).find('.tab-content').hide()
                    $(tabContainer).find('.tabs.active').removeClass('active')
                    $(this).addClass('active')
                    var contentShow = $(this).attr('content')
                    $(tabContainer).find('.' + contentShow).removeClass('hide').show()
                })
            }());
    // tabs navigation end
		}
		// chairman-awards-carousel start

	} catch (e) {
		console.log('Error', e);
	}
});