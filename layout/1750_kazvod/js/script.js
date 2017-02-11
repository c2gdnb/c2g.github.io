$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: false
  });
  jQuery(function ($) {
    var $active = $('#acordeon .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    $('#acordeon .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    $('#acordeon').on('show.bs.collapse', function (e) {
        $('#acordeon .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
	});
  $('.open_modal').click(function(e){ 
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
     $('.tel_phone').mask('+ 7 (999)-999-99-99');
        $('.ontop').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('header').offset().top -70}, 1000);
	  e.preventDefault();
	 });
          $('.scrollto1').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.uslugi_bg').offset().top -70}, 1000);
	  e.preventDefault();
	 });
               $('.scrollto2').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.system_bg').offset().top -70}, 1000);
	  e.preventDefault();
	 });
                    $('.scrollto3').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('.waranty_bg').offset().top -70}, 1000);
	  e.preventDefault();
	 });
});
