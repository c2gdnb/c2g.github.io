$(document).ready(function(){
	$('#toggle').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('move');
		} else {
			$(this).addClass('active');
			$('body').addClass('move');
			$('html,body').animate({scrollTop: 0},300)
			ulHeight = $('#menu ul').height();
			$('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
			/*logoL = $('#head .logo').offset().left;
			logoT = $('#head .logo').offset().top;
			$('.submenu .logo').css({top:logoT,left:logoL-87})*/
		}
	});
	$('#menu .close,#menu li a').click(function(){
		$('#toggle').click();
	});
	$('.ontop1').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop2').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top2').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop3').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top3').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop4').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop5').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top5').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop6').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top6').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop7').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top7').offset().top -50}, 1000);
		e.preventDefault();
	});
	$('.ontop8').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('.some_top8').offset().top -50}, 1000);
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
});