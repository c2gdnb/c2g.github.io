 $(document).ready(function(){
  if ($(window).scrollTop()===0){
    $('#main-nav').removeClass('scrolled');
  }
  else{
    $('#main-nav').addClass('scrolled');    
  }

  $(window).scroll(function(){
    if ($(window).scrollTop()===0){
      $('#main-nav').removeClass('scrolled');
    }
    else{
      $('#main-nav').addClass('scrolled');    
    }
      $(".section_h1").animated("zoomIn", "fadeOutDown");

      $(".animation_1").animated("flipInY", "fadeOutDown");
      $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
      $(".animation_3").animated("fadeInRight", "fadeOutDown");

      $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
      $(".right .resume_item").animated("fadeInRight", "fadeOutDown");
  });
 $('.first').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head').offset().top -300});
  e.preventDefault();

  if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
 });
 $('.advatages').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#tabs_center').offset().top -70});
  e.preventDefault();
  if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
 });
 $('.clients').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.main_slider_wrapper').offset().top -70});
  e.preventDefault();
  if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
 });
 $('.contacts').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#map').offset().top -70});
  e.preventDefault();
  if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
 });
 $('.button').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.buttonr').click(function(e){ 
    e.preventDefault(); 
         $('.overlay1').fadeIn('fast',function(){ 
             $('.nonebox1').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox1').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay1').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.buttonv1').click(function(e){ 
    e.preventDefault(); 
         $('.overlay2').fadeIn('fast',function(){ 
             $('.nonebox2').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox2').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay2').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.buttonv2').click(function(e){ 
    e.preventDefault(); 
         $('.overlay3').fadeIn('fast',function(){ 
             $('.nonebox3').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox3').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay3').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.buttonvd1').click(function(e){ 
    e.preventDefault(); 
         $('.overlay4').fadeIn('fast',function(){ 
             $('.nonebox4').animate({'top':'50%'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox4').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay4').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     }); 
 }); 
jQuery(document).ready(function(){
  
  jQuery("#myCarousel").touchwipe({
          wipeLeft: function() { jQuery("#myCarousel").carousel('next'); },
          wipeRight: function() { jQuery("#myCarousel").carousel('prev'); },
          min_move_x: 20,
          preventDefaultEvents: true
  });
});
jQuery(document).ready(function(){
  
  jQuery(".slider").touchwipe({
          wipeLeft: function() { jQuery(".slider").dragger('next'); },
          wipeRight: function() { jQuery(".slider").dragger('prev'); },
          min_move_x: 20,
          preventDefaultEvents: true
  });
});

