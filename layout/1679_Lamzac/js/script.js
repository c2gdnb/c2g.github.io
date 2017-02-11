$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.header_bg').addClass("sticky");
  }
  else{
    $('.header_bg').removeClass("sticky");
  }
});
       $('.scrollto1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top -85}, 1000);
  e.preventDefault();
 });
        $('.scrollto2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top -85}, 1000);
  e.preventDefault();
 });
               $('.scrollto3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top -85}, 1000);
  e.preventDefault();
 });
                      $('.scrollto4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto4').offset().top -85}, 1000);
  e.preventDefault();
 });
                                   $('.scrollto5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto5').offset().top -85}, 1000);
  e.preventDefault();
 });

         $('.open_modal').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
       $('.bxslider3').bxSlider({
  	controls: true,
  	pagerCustom: '.bx-pager'
  });
       $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox5').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay5').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('#slide1').click( function(e) {
    $('.slide2').toggleClass('sliders_none');
    $('.slide1').toggleClass('sliders_none');
    $(".slide3").removeClass('sliders_none');
    $(".slide4").removeClass('sliders_none');
    e.preventDefault();
  });
    	$('#slide3').click( function(e) {
    $('.slide4').toggleClass('sliders_none');
    $('.slide3').toggleClass('sliders_none');
    $(".slide1").removeClass('sliders_none');
    $(".slide2").removeClass('sliders_none');
    e.preventDefault();
  });