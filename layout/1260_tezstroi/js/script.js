      $('.button_move').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#form_move').offset().top }, 1000);
      e.preventDefault();
      });
$(document).ready(function(){
  $('.bxslider').bxSlider({
      mode: 'fade',
      pager : false,
      auto : true,
      pause : 10000
  });
});