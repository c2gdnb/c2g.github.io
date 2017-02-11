$(document).ready(function(){
  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
      $('#nav li').removeClass('active').filter('[data-slide-index='+ newIndex +']').removeClass('active');
    }
  });
  $('.bxslider1').bxSlider({
    pager:false
  });
  var mySlider;
  $('.bxslider10').bxSlider({
    pager:false
  });
  var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'fade',
        spaceBetween: 30
    });
  $('.open_modal1').click(function(e){ 
    e.preventDefault(); 
    $('#overlay').fadeIn('fast',function(){ 
      $('#nonebox').animate({'top':'20%'},500); 
   });
  });
  $('.open_modal2').click(function(e){ 
    e.preventDefault(); 
    $('#overlay2').fadeIn('fast',function(){ 
      $('#nonebox2').animate({'top':'20%'},500); 
   });
  });
  $('.open_modal3').click(function(e){ 
    e.preventDefault(); 
    $('#overlay3').fadeIn('fast',function(){ 
      $('#nonebox3').animate({'top':'20%'},500); 
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
     $('.ontop1').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top1').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop2').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top2').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop3').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top3').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop4').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top4').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop5').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top5').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop6').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top6').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop7').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top7').offset().top }, 1000);
      e.preventDefault();
    });
     $('.ontop8').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.some_top8').offset().top }, 1000);
      e.preventDefault();
    });
     $('.tel_phone').mask('+7 (999) 999-99-99');
   });