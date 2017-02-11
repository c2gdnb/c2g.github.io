$(document).ready(function(){
  $('.fancybox').fancybox();
  $('.bxslider').bxSlider({
  	pager : false,
    auto: true
  });
  $('.button').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'100px'},500); 
         });
     });

     $('#box-close').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $(".animation_4").animated("fadeInUp", "fadeOutDown");
      $(".animation_2").animated("fadeInLeft", "fadeOutDown");
      $(".animation_3").animated("fadeInRight", "fadeOutDown");
      $(".animation_1").animated("flipInY", "fadeOutDown");
});