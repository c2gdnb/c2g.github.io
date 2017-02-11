$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  	pager : false,
  	auto : true,
  	pause : 10000,
  	controls: false
  });
  $('ul li a').click(function() {
    $('ul li a.active').removeClass('active');
    $(this).closest('li a').addClass('active');
	});
	var liftoffTime = new Date();
liftoffTime.setDate(liftoffTime.getDate() + 5);
	$('#padZeroes').countdown({until: liftoffTime, padZeroes: true});
});
   $('.scrollto1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top}, 1000);
  e.preventDefault();
 });
   $('.scrollto2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top}, 1000);
  e.preventDefault();
 });
   $('.scrollto3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top}, 1000);
  e.preventDefault();
 });
   $('.scrollto4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto4').offset().top}, 1000);
  e.preventDefault();
 });
     $('.scrollto5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto5').offset().top}, 1000);
  e.preventDefault();
 });
       $('.scroll_otherto1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.scroll_ohter1').offset().top}, 1000);
  e.preventDefault();
 });
            $('.scroll_otherto2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.scroll_ohter2').offset().top}, 1000);
  e.preventDefault();
 });

     $('.scroll_otherto3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.scroll_ohter3').offset().top}, 1000);
  e.preventDefault();
 });

     $('.scroll_otherto4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.scroll_ohter4').offset().top}, 1000);
  e.preventDefault();
 });


