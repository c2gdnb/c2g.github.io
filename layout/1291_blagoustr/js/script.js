$(document).ready(function(){
	var liftoffTime = new Date();
liftoffTime.setDate(liftoffTime.getDate() + 5);
	$('#padZeroes').countdown({until: liftoffTime, padZeroes: true});
	 	$('.about_click').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.header_wrap').offset().top }, 1000);
  e.preventDefault();
 });


});
$(document).ready(function(){
  $('.bxslider1').bxSlider({
  	responsive: false
  });
   $('.bxslider2').bxSlider({
   	responsive: false,
   	slideWidth: 488
   });
});
 $(function(){
  $(".slides").slides({
    width: 488,
    height: 124,
    pagination: false,
    effect: {
      slide: {
        // Slide effect settings.
        speed: 1000
          // [number] Speed in milliseconds of the slide animation.
      },
      fade: {
        speed: 100,
          // [number] Speed in milliseconds of the fade animation.
        crossfade: true
          // [boolean] Cross-fade the transition.
      }
    }
  });
 });
