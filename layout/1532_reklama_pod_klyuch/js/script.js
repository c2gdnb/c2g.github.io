$(document).ready(function() {
	$(".warranty_title").animated("flipInY", "fadeOutDown");
	$(".fish1").animated("slideInLeft", "slideOutLeft");
	$(".fish2").animated("slideInRight", "slideOutRight");
	$(".worm").animated2("fadeInDown", "fadeOutUp");
	$(".f_in").animated("fadeIn", "fadeOut");
	$('.bxslider').bxSlider({
		pager: false,
		auto: true,
		pause: 7000
	});
	$('.ontop1').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top -75}, 1000);
		e.preventDefault();
	});
	$('.ontop2').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top2').offset().top -75}, 1000);
		e.preventDefault();
	});
	$('.ontop3').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top3').offset().top -75}, 1000);
		e.preventDefault();
	});
	$('.ontop4').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top -75}, 1000);
		e.preventDefault();
	});
	$('.ontop5').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top5').offset().top -75}, 1000);
		e.preventDefault();
	});
	if ($(window).innerWidth() <= '767'){
		$(".worm").removeClass('animated');
		$(".warranty_title").removeClass('animated');
		$(".fish1").removeClass('animated');
		$(".fish2").removeClass('animated');
		$(".worm").removeClass('animated');
		$(".f_in").removeClass('animated');
		 }
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
});