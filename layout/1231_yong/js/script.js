$(document).ready(function(){
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
     $('.buttonp').click(function(e){ 
    e.preventDefault(); 
         $('.overlay1').fadeIn('fast',function(){ 
             $('.nonebox1').animate({'top':'50%'},500); 
         });
     });

     $('.box-close1.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox1').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay1').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $(".tel_phone").mask("+7 (999) 999-99-99");

});