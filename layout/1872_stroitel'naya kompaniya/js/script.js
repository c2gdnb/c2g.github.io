$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode : 'fade',
  	controls: false,
  	auto:true
  });
   $('.scrollto1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top -50}, 1000);
  e.preventDefault();
 });
   $('.scrollto2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top -50}, 1000);
  e.preventDefault();
 });
   $('.scrollto3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top -50}, 1000);
  e.preventDefault();
 });
   $('.scrollto4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto4').offset().top -50}, 1000);
  e.preventDefault();
 });
   $('#toggle').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('move');
        } else {
            $(this).addClass('active');
            $('body').addClass('move');
            // ulHeight = $('#menu ul').height();
            // $('#menu').css('paddingTop', $(window).height() / 2 - ulHeight / 1);
        }
    });
    $('#menu .close').click(function(e) {
        e.preventDefault();
        $('#toggle').click();
    });
    $('#menu a').click(function(e) {
        e.preventDefault();
        $(this).hasClass('active')
        $('#toggle').removeClass('active');
        $('body').removeClass('move');
    });
    $('.call_now').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.call_p').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox2').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay2').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox5').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay5').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
});