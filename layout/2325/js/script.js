$(document).ready(function(){
	$('.bxslider').bxSlider({
		controls: false
	});
    $('.bxslider1').bxSlider({
		pager: false
	});
     $('.bxslider2').bxSlider({
		pager: false
	});
    $('.bxslider3').bxSlider({
    pagerCustom: '#bx-pager'
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
});
