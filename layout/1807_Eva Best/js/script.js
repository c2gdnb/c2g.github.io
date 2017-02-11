$(document).ready(function() {
    $('.fancybox').fancybox();
	$('.basic').fancySelect();
	$('.bxslider').bxSlider({
		pager:false
	});
	$('.tel_phone').mask('+ 8(999) 999-99-99');
 var more_6_project = $(".gallery_block:nth-child(3)").nextAll();
 var col_hide_pro_3 = more_6_project.length;
 var col_hide_pro_start = 0;
 var col_hide_pro_stop = 1;
 more_6_project.hide();

 if (col_hide_pro_3 > 0) {$(".more_portfolio").show();}
 else {$(".more_portfolio").hide();}

 function show_project_3 (){
 	if (col_hide_pro_3 <= 1){
 		more_6_project.slideDown('slow');
 		$(".more_portfolio").hide();
 	}
 	else{
 		more_6_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
 		col_hide_pro_3 -= 1;
 		col_hide_pro_start = col_hide_pro_stop;
 		col_hide_pro_stop += 1;
 	}
 }

 $(".show_more").click(function(e) {
 	e.preventDefault();
 	show_project_3();
 });

});
