$(document).ready(function(){
  $('.bxslider').bxSlider({
  	controls:false
  });
  $('.call_top').click(function(e){ 
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
     $('.send_button').click(function(e){ 
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
        $('.ontop').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#top').offset().top -110}, 1000);
	  e.preventDefault();
	 });
        $('.ontop2').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#top2').offset().top -110}, 1000);
	  e.preventDefault();
	 });
        $('.ontop3').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#top3').offset().top -110}, 1000);
	  e.preventDefault();
	 });
        $('.ontop4').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#top4').offset().top -110}, 1000);
	  e.preventDefault();
	 });
        $('.ontop5').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#top5').offset().top -110}, 1000);
	  e.preventDefault();
	 });
        $('#toggle').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('move');
        } else {
            $(this).addClass('active');
            $('body').addClass('move');
            // ulHeight = $('#menu ul').height();
            // $('#menu').css('paddingTop', $(window).height() / 2 - ulHeight / 1);
        }
    });
    $('#menu .close').click(function(e) {
        e.preventDefault();
        $('#toggle').click();
    });
    $('#menu a').click(function(e) {
        e.preventDefault();
        $(this).hasClass('active')
        $('#toggle').removeClass('active');
        $('body').removeClass('move');
    });
    // $('.switch_heb').click(function(e) {
    //     e.preventDefault();
    //     $('.lang .heb').css( "display", "block");
    //     $('.lang .rus').hide();
    //     $('.problems_wrap').addClass('ivrit_wrap');
    //     $('.offer_bg').addClass('ivrit5');
    //     $('.diagnostiks_wrap').addClass('ivrit2_wrap');
    //     $('.result_wrap').addClass('ivrit3');
    // });
    // $('.switch_rus').click(function(e) {
    //     e.preventDefault();
    //     $('.lang .heb').css( "display", "none");
    //     $('.lang .rus').css( "display", "block");
    //     $('.problems_wrap').removeClass('ivrit_wrap');
    //     $('.offer_bg').removeClass('ivrit5');
    //     $('.diagnostiks_wrap').removeClass('ivrit2_wrap');
    //     $('.result_wrap').removeClass('ivrit3');
    // });

});