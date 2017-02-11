$('#scrollup').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#head').offset().top }, 1000);
  e.preventDefault();
 });
$('.click').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'50%'},500); 
         });
     });

     $('.overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     }); 