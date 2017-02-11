// $('#landing-content').mousemove(function(e){
//     var amountMovedX = (e.clientX * 1 / 25);
//     var amountMovedY = (e.clientY * 1 / 10);
//     $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');

// });
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