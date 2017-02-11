$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  	pager : true,
  	auto : true,
  	pause : 10000,
  	controls: true
  });
  $('.bxslider1').bxSlider({
  	pager : false,
  	auto : false,
  	pause : 10000,
  	controls: true
  });
  $('.bxslider3').bxSlider({
  	controls: false,
  	pagerCustom: '.bx-pager'
  });
  if ($(window).innerWidth() <= '753'){
    $('.bxslider3').bxSlider({
    controls: true,
    pager : false
  });
  }
    var more_7_project = $(".products_block:nth-child(4)").nextAll();
 	var col_hide_pro_4 = more_7_project.length;
 	var col_hide_pro_start = 0;
 	var col_hide_pro_stop = 4;
 	more_7_project.hide();

 if (col_hide_pro_4 > 0) {$(".more_news").show();}
 else {$(".more_news").hide();}

 function show_project_4 (){
 	if (col_hide_pro_4 <= 4){
 		more_7_project.slideDown('slow');
 		$(".more_news").hide();
 	}
 	else{
 		more_7_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
 		col_hide_pro_4 -= 3;
 		col_hide_pro_start = col_hide_pro_stop;
 		col_hide_pro_stop += 3;
 	}
 }
 $(".more_news").click(function(e) {
 	e.preventDefault();
 	show_project_4();
 });
     var more_8_project = $(".main_table tr:nth-child(5)").nextAll();
 	var col_hide_pro_5 = more_8_project.length;
 	var col_hide_pro_start = 0;
 	var col_hide_pro_stop = 1;
 	more_8_project.hide();

 if (col_hide_pro_5 > 0) {$(".more_fermers").show();}
 else {$(".more_fermers").hide();}

 function show_project_5 (){
 	if (col_hide_pro_5 <= 1){
 		more_8_project.slideDown('slow');
 		$(".more_fermers").hide();
 	}
 	else{
 		more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
 		col_hide_pro_5 -= 1;
 		col_hide_pro_start = col_hide_pro_stop;
 		col_hide_pro_stop += 1;
 	}
 }
 $(".more_fermers").click(function(e) {
 	e.preventDefault();
 	show_project_5();
 });
   if ($(window).innerWidth() <= '1000'){
    var more_7_project = $(".products_block:nth-child(3)").nextAll();
 	var col_hide_pro_4 = more_7_project.length;
 	var col_hide_pro_start = 0;
 	var col_hide_pro_stop = 3;
 	more_7_project.hide();

 if (col_hide_pro_4 > 0) {$(".more_news").show();}
 else {$(".more_news").hide();}

 function show_project_4 (){
 	if (col_hide_pro_4 <= 3){
 		more_7_project.slideDown('slow');
 		$(".more_news").hide();
 	}
 	else{
 		more_7_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
 		col_hide_pro_4 -= 3;
 		col_hide_pro_start = col_hide_pro_stop;
 		col_hide_pro_stop += 3;
 	}
 }
 $(".more_news").click(function(e) {
 	e.preventDefault();
 	show_project_4();
 });
 }
    if ($(window).innerWidth() <= '753'){
    var more_9_project = $(".catalog_block:nth-child(3)").nextAll();
  var col_hide_pro_6 = more_9_project.length;
  var col_hide_pro_start = 0;
  var col_hide_pro_stop = 1;
  more_9_project.hide();

 if (col_hide_pro_6 > 0) {$(".more_catalog").show();}
 else {$(".more_catalog").hide();}

 function show_project_6 (){
  if (col_hide_pro_6 <= 3){
    more_9_project.slideDown('slow');
    $(".more_catalog").hide();
  }
  else{
    more_9_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
    col_hide_pro_6 -= 3;
    col_hide_pro_start = col_hide_pro_stop;
    col_hide_pro_stop += 3;
  }
 }
 $(".more_catalog").click(function(e) {
  e.preventDefault();
  show_project_6();
 });
 }
	$('#ddmenu .link1').click(function(e) {
    e.preventDefault();
      $('#com_menu1').fadeIn();
      $('#com_menu2').fadeOut();
      $('#com_menu3').fadeOut();
			$('#com_menu4').fadeOut();
		});
	$('#ddmenu .link2').click(function(e) {
    e.preventDefault();
			$('#com_menu2').fadeIn();;
      $('#com_menu1').fadeOut();
      $('#com_menu3').fadeOut();
      $('#com_menu4').fadeOut();
		});
	$('#ddmenu .link3').click(function(e) {
    e.preventDefault();
			$('#com_menu3').fadeIn();;
      $('#com_menu2').fadeOut();
      $('#com_menu1').fadeOut();
      $('#com_menu4').fadeOut();
		});
	$('#ddmenu .link4').click(function(e) {
    e.preventDefault();
			$('#com_menu4').fadeIn();;
      $('#com_menu2').fadeOut();
      $('#com_menu3').fadeOut();
      $('#com_menu1').fadeOut();
		});
//   if ($(window).innerWidth() <= '753'){
// 	  $('#vkl1').click(function(e){
// 	  		e.preventDefault();
// 	  		$('.slideup1').fadeIn();
// 	  		$('.slideup2').fadeOut();
// 	  		$('.slideup3').fadeOut();
// 	  		$('.slideup4').fadeOut();
// 	  	});
// 	  $('#vkl2').click(function(e){
// 	  		e.preventDefault();
// 	  		$('.slideup2').fadeIn();
// 	  		$('.slideup1').fadeOut();
// 	  		$('.slideup3').fadeOut();
// 	  		$('.slideup4').fadeOut();
// 	  	});
// 	  $('#vkl3').click(function(e){
// 	  		e.preventDefault();
// 	  		$('.slideup3').fadeIn();
// 	  		$('.slideup1').fadeOut();
// 	  		$('.slideup2').fadeOut();
// 	  		$('.slideup4').fadeOut();
// 	  	});
//    $('#vkl4').click(function(e){
// 	  		e.preventDefault();
// 	  		$('.slideup4').fadeIn();
// 	  		$('.slideup1').fadeOut();
// 	  		$('.slideup2').fadeOut();
// 			$('.slideup3').fadeOut();
// 	 	});
// }
	$('.hide_dop').click(function(e){
		e.preventDefault();
		$('.dop_menu').hide();
	});
	$('.open_basket').click(function(e){ 
    e.preventDefault(); 
         $('.overlay').fadeIn('fast',function(){ 
             $('.nonebox').animate({'top':'40%'},500); 
         });
     });
	            $('#toggle').click (function() {
		if ($('#main_menu').is(":visible")) {
			$('#main_menu').slideUp("slow");
		}
		else {
			$('#main_menu').slideDown("slow");
		}
	});
     $('.box-close.one, .next').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
      $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
      });
  $('.link11').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#link1').offset().top -46}, 1000);
  e.preventDefault();
 });
    $('.link22').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#link2').offset().top -46}, 1000);
  e.preventDefault();
 });
      $('.link33').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#link3').offset().top -46}, 1000);
  e.preventDefault();
 });
        $('.link44').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#map').offset().top -86}, 1000);
  e.preventDefault();
 });
          $('.link55').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#link5').offset().top -46}, 1000);
  e.preventDefault();
 });
            $('.link66').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#link6').offset().top -46}, 1000);
  e.preventDefault();
 });
	$("#ddmenu li").click(function(e) {
	  e.preventDefault();
	  $("#ddmenu li").removeClass('active');
	  $(this).addClass('active');
	})
  $(".hide_dop").click(function(e) {
    e.preventDefault();
    $("#ddmenu li").removeClass('active');
  })
	$(".sub > a").click(function() {
            var ul = $(this).next(),
                    clone = ul.clone().css({"height":"auto"}).appendTo(".left_menu_bg"),
                    height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
            clone.remove();
            ul.animate({"height":height});
            return false;
        });
           $('.left_menu_bg > ul > li > a').click(function(){
           $('.sub a').removeClass('active');
           $(this).addClass('active');
        }),
           $('.sub ul li a').click(function(){
           $('.sub ul li a').removeClass('active');
           $(this).addClass('active');
        });
           $('.basic').fancySelect();
           $('.change_view a').click(function(e){
            e.preventDefault();
           $('.change_view a').removeClass('active');
           $(this).addClass('active');
        })
           $('.change_view a').click(function(e){
            e.preventDefault();
              $('.catalog_block').toggleClass('vertical');
           })
});