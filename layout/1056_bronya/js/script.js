$('.bxslider').bxSlider();
$('.buy').click(function(e){ 
    e.preventDefault(); 
         $('.overlay1').fadeIn('fast',function(){ 
             $('.nonebox1').animate({'top':'160px'},500); 
         });
     });

     $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox1').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay1').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
         
     });
     $('.first').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head').offset().top }, 1000);
  e.preventDefault();
 });
 $('.products').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#products').offset().top }, 1000);
  e.preventDefault();
 });
 $('.contacts').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
  e.preventDefault();
 });