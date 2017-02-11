$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager:false
  });
  $('.fancybox').fancybox();
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
     $('.ontop1').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top }, 1000);
     	e.preventDefault();
     });
     $('.ontop4').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top }, 1000);
     	e.preventDefault();
     });
});