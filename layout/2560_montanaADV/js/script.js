$(document).ready(function(){
	$('.bxslider').bxSlider({
		pager:false
	});
	$('.ontop1').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top }, 1000);
		e.preventDefault();
	});
	$('.ontop2').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top2').offset().top }, 1000);
		e.preventDefault();
	});
	$('.ontop3').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top3').offset().top }, 1000);
		e.preventDefault();
	});
	$('.ontop4').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top }, 1000);
		e.preventDefault();
	});
});