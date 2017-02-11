  var clock;
    
    $(document).ready(function() {
      var clock;

      clock = $('.your-clock').FlipClock({
            language: 'ru',
            clockFace: 'DailyCounter'
        });
            
        clock.setTime(220880);
        clock.setCountdown(true);
        clock.start();

    });
$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager : false,
    adaptiveHeight : false
  });
  $('.bxslider_v').bxSlider({
  });
});
 $(document).ready(function() {
            $('.fancybox').fancybox();
        });
$('.button').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
         $('.ontop').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.some_top').offset().top -70}, 1000);
  e.preventDefault();
 });
        $('.on_reasons').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.reasons_wrap').offset().top -40}, 1000);
  e.preventDefault();
 });
        $('.on_examples').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.on_tabs').offset().top -40}, 1000);
  e.preventDefault();
 });
          $('.on_reviews').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.reviews_bg').offset().top -40}, 1000);
  e.preventDefault();
 });      $('.on_prices').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.to_prices').offset().top -40}, 1000);
  e.preventDefault();
 });      $('.on_steps').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.steps_main_wrapper').offset().top -40}, 1000);
  e.preventDefault();
 });      $('.on_big_from').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.big_form_bg').offset().top -40}, 1000);
  e.preventDefault();
 });      $('.on_footer').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#footer').offset().top -40}, 1000);
  e.preventDefault();
 });
    $('#toggle').click(function(e){
      e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('body').removeClass('move');
    } else {
            $(this).addClass('active');
      $('body').addClass('move');
            // $('html,body').animate({scrollTop: 0},300)
      ulHeight = $('#menu ul').height();
            $('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
      /*logoL = $('#head .logo').offset().left;
      logoT = $('#head .logo').offset().top;
            $('.submenu .logo').css({top:logoT,left:logoL-87})*/
    }
  });
  $('#menu .close').click(function(e){
    e.preventDefault();
        $('#toggle').click();
  });
  $('#menu a').click(function(e){
      e.preventDefault();
    $(this).hasClass('active') 
      $('#toggle').removeClass('active');
      $('body').removeClass('move');
     });
   $('.tel_phone').mask('+7 (999) 999-99-99');
