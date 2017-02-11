$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: false
  });
        $('.overlay').click(function(e){
        e.preventDefault(); 
            $('.nonebox').animate({'top':'-1100px'},500,function(){
                $('.overlay').fadeOut('fast');
           });
  
       });
});