$(document).ready(function(){
	var slider1 = $('.bxslider').bxSlider({
    adaptiveHeight: true,
    slideWidth: 235,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 20,
    pager:false,
    loop: false
  })
    if ($(window).innerWidth() <= '952'){
      var slider1 = $('.bxslider').bxSlider({
        slideWidth: 290,
        minSlides: 1,
        pager: false,
        slideMargin: 0,
        controls: true
      })
    }
	$('.accordion section h2 a').click(function(e){ 
		// e.preventDefault();
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
	$('#menu .close').click(function(){
		$('#toggle').click();
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