$(document).ready(function(){
	$('.bxslider').bxSlider({
		controls: false
	});
	var slider1 = $('.bxslider1').bxSlider({
		adaptiveHeight: true,
		slideWidth: 320,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 20,
		pager:false,
		loop: false
	})
	if ($(window).innerWidth() <= '952'){
		var slider1 = $('.bxslider1').bxSlider({
			slideWidth: 320,
			minSlides: 1,
			pager: false,
			slideMargin: 0,
			adaptiveHeight: false,
			controls: true
		})
	}
	$('#toggle').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('move');
		} else {
			$(this).addClass('active');
			$('body').addClass('move');
			$('html,body').animate({scrollTop: 0},300)
			ulHeight = $('#menu ul').height();
			$('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
			/*logoL = $('#head .logo').offset().left;
			logoT = $('#head .logo').offset().top;
			$('.submenu .logo').css({top:logoT,left:logoL-87})*/
		}
	});
	$('#menu .close,#menu li a').click(function(){
		$('#toggle').click();
	});
	$('.fancybox').fancybox();
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});