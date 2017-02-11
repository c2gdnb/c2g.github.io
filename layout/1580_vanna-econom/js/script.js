$(document).ready(function() {
	var clock;

      clock = $('.your-clock').FlipClock({
            language: 'ru',
            clockFace: 'DailyCounter'
        });
            
        clock.setTime(5040);
        clock.setCountdown(true);
        clock.start()
        $('.bxslider').bxSlider({
        	pager: false
        });
        var clock;

      clock = $('.your-clock2').FlipClock({
            language: 'ru',
            clockFace: 'DailyCounter'
        });
            
        clock.setTime(5040);
        clock.setCountdown(true);
        clock.start()
        $('.bxslider').bxSlider({
        	pager: false
        });
         $('.bxslider_v').bxSlider({
  });
        $('.fancybox').fancybox();
        	jQuery('#vkl1').one('click', function() { // tab button 
			jQuery('.bxslider').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl2').one('click', function() { // tab button 
			jQuery('.bxslider2').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl3').one('click', function() { // tab button 
			jQuery('.bxslider3').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl4').one('click', function() { // tab button 
			jQuery('.bxslider4').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl5').one('click', function() { // tab button 
			jQuery('.bxslider5').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl6').one('click', function() { // tab button 
			jQuery('.bxslider6').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl7').one('click', function() { // tab button 
			jQuery('.bxslider7').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl8').one('click', function() { // tab button 
			jQuery('.bxslider8').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl9').one('click', function() { // tab button 
			jQuery('.bxslider9').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl10').one('click', function() { // tab button 
			jQuery('.bxslider10').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
			});
			jQuery('#vkl11').one('click', function() { // tab button 
			jQuery('.bxslider11').bxSlider({ // call bx slider 
				pager : false,
			    adaptiveHeight : false
			}); 
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
     $('#toggle').click(function(e){
      e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('body').removeClass('move');
    } else {
            $(this).addClass('active');
      $('body').addClass('move');
            // $('html,body').animate({scrollTop: 0},300)
      ulHeight = $('#menu ul').height();
            $('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
      /*logoL = $('#head .logo').offset().left;
      logoT = $('#head .logo').offset().top;
            $('.submenu .logo').css({top:logoT,left:logoL-87})*/
    }
  });
  $('#menu .close').click(function(e){
    e.preventDefault();
        $('#toggle').click();
  });
  $('#menu a').click(function(e){
      e.preventDefault();
    $(this).hasClass('active') 
      $('#toggle').removeClass('active');
      $('body').removeClass('move');
     });
          $('.on_action').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.action_bg').offset().top -40}, 1000);
	  e.preventDefault();
	 });
          $('.on_price').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.price_bg').offset().top -40}, 1000);
	  e.preventDefault();
	 });
          $('.on_whe').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.main_advantages_bg').offset().top -40}, 1000);
	  e.preventDefault();
	 });
          $('.on_tabs').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.tabs_bg').offset().top -40}, 1000);
	  e.preventDefault();
	 });
           $('.on_reviews').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.reviews_bg').offset().top -40}, 1000);
	  e.preventDefault();
	 });
           $('.on_catalog').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.catalog_wrapper').offset().top -40}, 1000);
	  e.preventDefault();
	 });
	});