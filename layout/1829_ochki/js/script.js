$(document).ready(function() {

      var clock;

      clock = $('.your-clock').FlipClock({
            language: 'ru',
            clockFace: 'HourlyCounter'
        });
            
        clock.setTime(5040);
        clock.setCountdown(true);
        clock.start();
        var clock;

      clock = $('.your-clock2').FlipClock({
            language: 'ru',
            clockFace: 'HourlyCounter'
        });
            
        clock.setTime(5040);
        clock.setCountdown(true);
        clock.start();
        $('.bxslider').bxSlider({
        	controls:false
        });
        $('.bxslider1').bxSlider({
        	pager:false
        })
    $('.open_modal').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.buy_now').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'40%'},500); 
         });
     });

     $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
      $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
      $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
      });
      $('.plus').click(function () {
                var $input = $('.red').parent().find('input');
                $input.val(parseInt($input.val()) + 1990);
                $input.change();
                return false;
      });
      $('.minus').click(function () {
                var $input = $('.red').parent().find('input');
                var count = parseInt($input.val()) - 1990;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
      $('.colours_wrap a').click(function(e){
            e.preventDefault();
           $('.colours_wrap a').removeClass('active');
           $(this).addClass('active');
        })
        $('.click1').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click1').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click2').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click2').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click3').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click3').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click4').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click4').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click5').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click5').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click6').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click6').offset().top}, 1000);
          e.preventDefault();
         });
        $('.click7').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#click7').offset().top}, 1000);
          e.preventDefault();
         });
});