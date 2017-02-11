$('.call_button').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'160px'},500); 
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
      $(document).ready( function(){
    $.fn.snow();
});