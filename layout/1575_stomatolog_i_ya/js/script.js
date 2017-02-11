$(document).ready(function(){
  $('.fancybox').fancybox();
  $('.bxslider').bxSlider({
  	pager:false
  });
  $('.bxslider5').bxSlider({
  	pager:false
  });
  $('.bxslider6').bxSlider({
  	mode: 'fade',
  	pager : false,
  	auto : true,
  	pause : 10000,
  });
  $('.bxslider2').bxSlider({
    	pagerCustom: '.bx-pager',
    });
  $('.bxslider3').bxSlider();
  $("header li").click(function(e) {
	  e.preventDefault();
	  $("header li").removeClass('active');
	  $(this).addClass('active');
	})
	  $('.scrollto1').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top -44}, 1000);
	  e.preventDefault();
	 });
	  $('.scrollto2').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top -44}, 1000);
	  e.preventDefault();
	 });
	  $('.scrollto3').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top -44}, 1000);
	  e.preventDefault();
	 });
	  $('.scrollto4').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto4').offset().top -44}, 1000);
	  e.preventDefault();
	 });
	  $('.scrollto5').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto5').offset().top -44}, 1000);
	  e.preventDefault();
	 });
	  $('.scrollto6').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#scrollto6').offset().top -44}, 1000);
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
         $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.open_modal2').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox2').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay2').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.open_modal3').click(function(e){ 
    e.preventDefault(); 
         $('#overlay3').fadeIn('fast',function(){ 
             $('#nonebox3').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox3').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay3').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.open_modal4').click(function(e){ 
    e.preventDefault(); 
         $('#overlay4').fadeIn('fast',function(){ 
             $('#nonebox4').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox4').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay4').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('#nonebox5').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay5').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

 });
$(document).ready(function(){
		var theToggle = document.getElementById('toggle');

	// based on Todd Motto functions
	// http://toddmotto.com/labs/reusable-js/

	// hasClass
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	// addClass
	function addClass(elem, className) {
	    if (!hasClass(elem, className)) {
	    	elem.className += ' ' + className;
	    }
	}
	// removeClass
	function removeClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	}
	// toggleClass
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(" " + className + " ") >= 0 ) {
	            newClass = newClass.replace( " " + className + " " , " " );
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}

	theToggle.onclick = function() {
	   toggleClass(this, 'on');
	   return false;
	}
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
	$('#menu .close, .bottom_link').click(function(){
        $('#toggle').click();
	});
});