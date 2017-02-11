$(document).ready(function(){
		$(function() {
         $("#nav .other").click(function() {        
             $("#nav .other").toggleClass("show");
         })
    });
		$(".page_nav li").click(function(e) {
	  e.preventDefault();
	  $(".page_nav li").removeClass('active');
	  $(this).addClass('active');
	})
		var h_hght1 = 400;
		$(window).scroll(function() {
		var elem = $('header');
    	var top = $(this).scrollTop();
	  if(top > h_hght1){
        $('header').addClass("sticky");
    } 
	  else{
	    $('header').removeClass("sticky");
	  }
	});
		var h_hght4 = 0;
		$(window).scroll(function() {
    	var top4 = $(this).scrollTop();
	  if(top4 > h_hght4){
        $('.page_nav ul li:nth-child(1)').addClass("active");
        $('.page_nav ul li:nth-child(2)').removeClass("active");
    } 
	  else{
	    $('.page_nav ul li:nth-child(1)').removeClass("active");
	  }
	});
		
		var h_hght2 = 1300;
		$(window).scroll(function() {
    	var top2 = $(this).scrollTop();
	  if(top2 > h_hght2){
        $('.page_nav ul li:nth-child(2)').addClass("active");
        $('.page_nav ul li:nth-child(1)').removeClass("active");
    } 
	  else{
	    $('.page_nav ul li:nth-child(2)').removeClass("active");
	  }
	});
		var h_hght3 = 2800;
		$(window).scroll(function() {
    	var top3 = $(this).scrollTop();
	  if(top3 > h_hght3){
        $('.page_nav ul li:nth-child(3)').addClass("active");
        $('.page_nav ul li:nth-child(2)').removeClass("active");
    } 
	  else{
	    $('.page_nav ul li:nth-child(3)').removeClass("active");
	  }
	})
		$('.open_modal').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'43%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     	   $(".scrollto1").click(function(e) {
  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top -145}, 1000);
  e.preventDefault();
 }); 
	   $(".scrollto2").click(function(e) {
  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top -145}, 1000);
  e.preventDefault();
 });
	     $(".scrollto3").click(function(e) {
  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top -145}, 1000);
  e.preventDefault();
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
});
