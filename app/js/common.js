$(function() {
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		if ($(".mobile-mnu").hasClass('open')){
			$('.mobile-mnu').removeClass('open')
		} else{
			$(".mobile-mnu").addClass('open')
		};
	});
	$('.topMenu__nav a, a.logo, .mouse a, .botMenu__nav a').click(function () {
	var elementHref = $(this).attr('href');
	var dist = $(elementHref).offset().top;
	$('html, body').animate({
		scrollTop: dist
	}, 800);
	if ($(".mobile-mnu").hasClass('open')){
		$('.mobile-mnu').removeClass('open');
		$hamburger.toggleClass("is-active");
	};
	return false;
	});
	var showNumber = false;
	$(window).on("scroll resize", function () {
		var countbox = ".aboutUs";
    if (showNumber) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.aboutUs__number').css('opacity', '1');
        $('.aboutUs__number').spincrement({
            thousandSeparator: "",
            duration: 2200
        });
        showNumber = true;
    };
  });
	$(".popVideo").magnificPopup({
		callbacks:{
			close: function () {
				$(".youVideo").html("");
			}
		}
	});
	$(".popVideo").click(function () {
		$(".youVideo").html('<iframe width="auto" height="auto" src="https://www.youtube.com/embed/0URN2gF7QF4?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	});
	//TIMER! Format date: "month/day/year hour:minute:second"
	$(".countdown").downCount({
		date: "05/01/2019 12:00:00"
	});
	$(".lineup__carousel").owlCarousel({
		items: 1,
		margin: 30,
		nav: false,
		dots: true,
		loop: true,
		// autoplay: true
	});
});
