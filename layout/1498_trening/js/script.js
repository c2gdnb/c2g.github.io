$(document).ready(function(){
	var liftoffTime = new Date();
liftoffTime.setDate(liftoffTime.getDate() + 11);
	$('#padZeroes').countdown({until: liftoffTime, padZeroes: true});


});
$('.buttonz').click(function(e){ 
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
     $(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".check_block").animated("fadeInUp", "fadeOutDown");
	$(".animation_4").animated("fadeInUp", "fadeOutDown");
