$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  	pager : false,
  	auto : true,
  	pause : 10000,
  	controls: false
  });
  $('.bxslider1').bxSlider({
  	pager : false
  });
  $('.bxslider2').bxSlider({

  });
 $(".fancybox").attr('rel', 'data-gallery').fancybox();
 //   $('#portfoliolist').mixitup({
	// load: {
	// 	filter: '#Filters'
	// },
	// controls: {
	// 	toggleFilterButtons: true
	// }
// });
  $(".basic").fancySelect().on("change",function(){
			item = $(this).val();
			$('#portfoliolist').mixItUp('filter',item);
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
	    var more_6_project = $(".first-tab .gallery_block3").nextAll();
	    var col_hide_pro_3 = more_6_project.length;
	    var col_hide_pro_start = 0;
	    var col_hide_pro_stop = 1;
	    more_6_project.attr("style", "display: none !important");

	    if (col_hide_pro_3 > 0) {$(".first_b").show();}
	    else {$(".first_b").hide();}

	    function show_project_3 (){
	    	if (col_hide_pro_3 <= 1){
	    		more_6_project.slideDown('slow');
	    		$(".first_b").hide();
	    	}
	    	else{
	    		more_6_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
	    		col_hide_pro_3 -= 1;
	    		col_hide_pro_start = col_hide_pro_stop;
	    		col_hide_pro_stop += 1;
	    	}
	    }
	    $(".first_b").click(function(e) {
	    	e.preventDefault();
	    	show_project_3();
	    });
            var more_7_project = $(".second-tab .gallery_block3").nextAll();
      var col_hide_pro_4 = more_7_project.length;
      var col_hide_pro_start = 0;
      var col_hide_pro_stop = 1;
      more_7_project.attr("style", "display: none !important");

      if (col_hide_pro_4 > 0) {$(".second_b").show();}
      else {$(".second_b").hide();}

      function show_project_4 (){
        if (col_hide_pro_4 <= 1){
          more_7_project.slideDown('slow');
          $(".second_b").hide();
        }
        else{
          more_7_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
          col_hide_pro_4 -= 1;
          col_hide_pro_start = col_hide_pro_stop;
          col_hide_pro_stop += 1;
        }
      }
      $(".second_b").click(function(e) {
        e.preventDefault();
        show_project_4();
      });
      var more_8_project = $(".third-tab .gallery_block3").nextAll();
      var col_hide_pro_5 = more_8_project.length;
      var col_hide_pro_start = 0;
      var col_hide_pro_stop = 1;
      more_8_project.attr("style", "display: none !important");

      if (col_hide_pro_5 > 0) {$(".third_b").show();}
      else {$(".third_b").hide();}

      function show_project_5 (){
        if (col_hide_pro_5 <= 1){
          more_8_project.slideDown('slow');
          $(".third_b").hide();
        }
        else{
          more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
          col_hide_pro_5 -= 1;
          col_hide_pro_start = col_hide_pro_stop;
          col_hide_pro_stop += 1;
        }
      }
      $(".third_b").click(function(e) {
        e.preventDefault();
        show_project_5();
      });
            var more_9_project = $(".four-tab .gallery_block3").nextAll();
      var col_hide_pro_6 = more_9_project.length;
      var col_hide_pro_start = 0;
      var col_hide_pro_stop = 1;
      more_9_project.attr("style", "display: none !important");

      if (col_hide_pro_6 > 0) {$(".four_b").show();}
      else {$(".four_b").hide();}

      function show_project_6 (){
        if (col_hide_pro_6 <= 1){
          more_9_project.slideDown('slow');
          $(".four_b").hide();
        }
        else{
          more_9_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
          col_hide_pro_6 -= 1;
          col_hide_pro_start = col_hide_pro_stop;
          col_hide_pro_stop += 1;
        }
      }
      $(".four_b").click(function(e) {
        e.preventDefault();
        show_project_6();
      });
	$('.scrollto1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto1').offset().top -60}, 1000);
  e.preventDefault();
 });
	$('.scrollto2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto2').offset().top -60}, 1000);
  e.preventDefault();
 });
	$('.scrollto3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto3').offset().top -60}, 1000);
  e.preventDefault();
 });
	$('.scrollto4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto4').offset().top -60}, 1000);
  e.preventDefault();
 });
	$('.scrollto5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto5').offset().top -60}, 1000);
  e.preventDefault();
 });
	$('.scrollto6').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#scrollto6').offset().top -60}, 1000);
  e.preventDefault();
 });
	 $('.scrollto7').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#map').offset().top -60}, 1000);
  e.preventDefault();
 });
 });