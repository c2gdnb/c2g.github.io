var imgHead = [
			'images/header_bg.jpg',
			'images/header_bg1.jpg',
			'images/header_bg2.jpg'
		], i=1;
	function header(){

		if(i > (imgHead.length-1)){
			$('.header').animate({'opacity':'0.8'},100,function(){
				i=1;
				$('.header').css({
					'background':'url('+imgHead[0]+')50% 50%',
					'background-size':'cover'
				});
			});
			$('.header').animate({'opacity':'1'},100);
		}else{
			$('.header').animate({'opacity':'0.8'},100,function(){
				$('.header').css({
					'background':'url('+imgHead[i]+')50% 50%',
					'background-size':'cover'
				});
				i++;
			});
			$('.header').animate({'opacity':'1'},100);
		}
		
	}
	var intervalheader = setInterval(header,5000);
	$('.about_click').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.header').offset().top }, 1000);
  e.preventDefault();
 });
 $('.advatages').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#services').offset().top }, 1000);
  e.preventDefault();
 });
 $('.feedback').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#containerv').offset().top }, 1000);
  e.preventDefault();
 });
 $('.events_click').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#events_click').offset().top }, 1000);
  e.preventDefault();
 });
	 
