jQuery(function ($) {
          $('.photo_item1').click(function(){ 
         $("body").css("overflow","hidden");
    });
 $('#openModal').click(function(){ 
         $("body").css("overflow","auto");
    });
    $('.slider1').mobilyslider({
        transition: 'horizontal',
        animationSpeed: 200,
        bullets: false,
        arrowsHide: false
    });
  $('.bigphoto_2').magnificPopup({
  delegate: 'img', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    }
});
$('#open_form').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'160px'},500); 
         });
     });
     $('#box-close,.one').click(function(){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
         $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
     });
     });
    //  $(".menu").on("click", ".group", function(){
    //  $(".group").removeClass("active");
    //  $(this).addClass("active");
    // });