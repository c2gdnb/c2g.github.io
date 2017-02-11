$(document).ready(function() {
	var clock;

	clock = $('.your-clock').FlipClock({
		language: 'ru',
		clockFace: 'HourCounter'
	});

	clock.setTime(61200);
	clock.setCountdown(true);
	clock.start();
	var clock1;

	clock1 = $('.your-clock1').FlipClock({
		language: 'ru',
		clockFace: 'HourCounter'
	});

	clock1.setTime(61200);
	clock1.setCountdown(true);
	clock1.start();
	$('.tel_phone').mask('+7 (999) 999-99-99');
	$('.fancybox').fancybox();
	$('.bxslider').bxSlider({
		pager:false
	});
	$('.open_modal').click(function(e){ 
		e.preventDefault(); 
		$('#overlay').fadeIn('fast',function(){ 
			$('#nonebox').animate({'top':'50%'},500); 
		});
	});

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
     	e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.ontop1').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop2').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top2').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop3').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top3').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop4').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop5').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top5').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop6').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top6').offset().top -42}, 1000);
     	e.preventDefault();
     });
     $('.ontop7').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.some_top7').offset().top -42}, 1000);
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
	$('#menu .close,#menu li a').click(function(){
		$('#toggle').click();
	});
	var more_8_project = $(".photo_row:nth-child(1)").nextAll();
      var col_hide_pro = more_8_project.length;
      var col_hide_pro_start = 0;
      var col_hide_pro_stop = 4;
      more_8_project.hide();

      if (col_hide_pro > 0) {$(".m_photo").show();}
      else {$(".m_photo").hide();}

      function show_project_4 (){
      	if (col_hide_pro <= 4){
      		more_8_project.slideDown('slow');
      		$(".m_photo").hide();
      	}
      	else{
      		more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
      		col_hide_pro -= 4;
      		col_hide_pro_start = col_hide_pro_stop;
      		col_hide_pro_stop += 4;
      	}
      }

      $(".m_photo").click(function(e) {
      	e.preventDefault();
      	show_project_4();
      });
});