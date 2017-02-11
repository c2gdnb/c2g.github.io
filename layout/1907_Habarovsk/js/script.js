$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager:false,
  	auto: true,
  	mode: 'fade',
  	controls: false
  });
   $('.bxslider3').bxSlider({
      controls: false,
      pagerCustom: '.bx-pager'
     });
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
  $('#menu .close').click(function(){
  	$('#toggle').click();
  });
    var liftoffTime = new Date();
liftoffTime.setDate(liftoffTime.getDate() + 5);
  $('#padZeroes').countdown({until: liftoffTime, padZeroes: true});
});