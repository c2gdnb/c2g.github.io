$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager : false
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
     $('.first').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head').offset().top }, 1000);
  e.preventDefault();
 });
        $('.second').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head1').offset().top }, 1000);
  e.preventDefault();
 });
         $('.third').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head2').offset().top }, 1000);
  e.preventDefault();
 });
          $('.four').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head3').offset().top }, 1000);
  e.preventDefault();
 });
                    $('.about_click').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head4').offset().top }, 1000);
  e.preventDefault();
 });