$(document).ready(function(){
  $('.fancybox').fancybox();
  $.stellar({
  horizontalOffset: 40,
  verticalOffset: 150
});
  $(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
  $(".animation_4").animated("slideInUp", "fadeOutDown");
	$(".animation_5").animated("rotateIn", "fadeOutDown");
});
$('.button').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

     $('#box-close').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.button2').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'40%'},500); 
         });
     });

     $('#box-close2').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox2').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay2').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.button3').click(function(e){ 
    e.preventDefault(); 
         $('#overlay3').fadeIn('fast',function(){ 
             $('#nonebox3').animate({'top':'40%'},500); 
         });
     });

     $('#box-close3, .button9').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox3').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay3').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.button4').click(function(e){ 
    e.preventDefault(); 
         $('#overlay4').fadeIn('fast',function(){ 
             $('#nonebox4').animate({'top':'40%'},500); 
         });
     });

     $('#box-close4, .button9').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox4').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay4').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.button5').click(function(e){ 
    e.preventDefault(); 
         $('#overlay5').fadeIn('fast',function(){ 
             $('#nonebox5').animate({'top':'40%'},500); 
         });
     });

     $('#box-close5, .button9').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox5').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay5').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.button6').click(function(e){ 
    e.preventDefault(); 
         $('#overlay6').fadeIn('fast',function(){ 
             $('#nonebox6').animate({'top':'40%'},500); 
         });
     });

     $('#box-close6').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox6').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay6').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.button7').click(function(e){ 
    e.preventDefault(); 
         $('#overlay7').fadeIn('fast',function(){ 
             $('#nonebox7').animate({'top':'40%'},500); 
         });
     });

     $('#box-close7').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox7').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay7').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
       $('.button9').click(function(e){ 
    e.preventDefault(); 
         $('#overlay9').fadeIn('fast',function(){ 
             $('#nonebox9').animate({'top':'40%'},500); 
         });
     });

     $('#box-close9').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox9').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay9').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

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
  $('html,body').stop().animate({ scrollTop: $('.scrolltomap').offset().top -50}, 1000);
  e.preventDefault();
 });