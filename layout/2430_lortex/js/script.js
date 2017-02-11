$(document).ready(function(){
	$('.bxslider').bxSlider({
		controls:false,
		mode: 'fade',
		auto: true
	});
	$('.bxslider3').bxSlider({
     	controls: false,
     	pagerCustom: '.bx-pager'
     });
	$('.open_modal').click(function(e){ 
		e.preventDefault(); 
		$('#overlay').fadeIn('fast',function(){ 
			$('#nonebox').animate({'top':'40%'},500); 
		});
	});
	$('.open_modal2').click(function(e){ 
		e.preventDefault(); 
		$('#overlay2').fadeIn('fast',function(){ 
			$('#nonebox2').animate({'top':'40%'},500); 
		});
	});

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
     	e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
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
     $('.cat_title').click(function(e){
     	e.preventDefault(); 
     		$('.left_menu').slideToggle();
     	});

 });