$(document).ready(function(){
	$('.bxslider').bxSlider({
		controls:false,
		auto: true,
		pause: 7000
	});
	$('.bxslider1').bxSlider({
		pager:false
	});
	$('.bxslider2').bxSlider({
		pager:false
	});
	$('.bxslider3').bxSlider({
     	controls: true,
     	pagerCustom: '.bx-pager'
     });
jQuery(function ($) {
    var $active = $('#acordeon .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    $('#acordeon .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    $('#acordeon').on('show.bs.collapse', function (e) {
        $('#acordeon .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});
	
	$('#toggle').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('move');
		} else {
			$(this).addClass('active');
			$('body').addClass('move');
			$('html,body').animate({scrollTop: 0},300)
			ulHeight = $('#menu ul').height();
			$('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
			/*logoL = $('#head .logo').offset().left;
			logoT = $('#head .logo').offset().top;
			$('.submenu .logo').css({top:logoT,left:logoL-87})*/
		}
	});
	$('#menu .close').click(function(){
		$('#toggle').click();
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
      $('.fancybox').fancybox();
     $('.nstSlider').nstSlider({
     	"left_grip_selector": ".leftGrip",
     	"right_grip_selector": ".rightGrip",
     	"value_bar_selector": ".bar",
     	"value_changed_callback": function(cause, leftValue, rightValue) {
     		var $container = $(this).parent();
     		$container.find('.leftLabel').text(leftValue);
     		$container.find('.rightLabel').text(rightValue);
     	},
     	"highlight": {
     		"grip_class": "gripHighlighted",
     		"panel_selector": ".highlightPanel"
     	}
     });
     $('#highlightRangeButton').click(function() {
     	var highlightMin = Math.random() * 20,
     	highlightMax = highlightMin + Math.random() * 80;
     	$('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);
     });
     $('.tabs').easyResponsiveTabs();
     $('.ontop1').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.tabs_first').offset().top -50}, 1000);
     	e.preventDefault();
     	$('.tt_tab1').toggleClass( "resp-tab-active" );
     	$('.tt_tab1_content').toggleClass( "resp-tab-content-active" );
     	$('.tt_tab2').removeClass( "resp-tab-active" );
     	$('.tt_tab3').removeClass( "resp-tab-active" );
     	$('.tt_tab2_content').removeClass( "resp-tab-content-active" );
     	$('.tt_tab3_content').removeClass( "resp-tab-content-active" );
     	$('.tt_tab2_content').hide();
     	$('.tt_tab3_content').hide();
     	$('.tt_tab1_content').show();
     });
      $('.ontop2').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.tabs_first').offset().top -50}, 1000);
     	$('.tt_tab2').toggleClass( "resp-tab-active" );
     	$('.tt_tab2_content').toggleClass( "resp-tab-content-active" );
     	$('.tt_tab1').removeClass( "resp-tab-active" );
     	$('.tt_tab3').removeClass( "resp-tab-active" );
     	$('.tt_tab1_content').removeClass( "resp-tab-content-active" );
     	$('.tt_tab3_content').removeClass( "resp-tab-content-active" );
     	$('.tt_tab1_content').hide();
     	$('.tt_tab3_content').hide();
     	$('.tt_tab2_content').show();
     	e.preventDefault();
     });
      $('.ontop3').on('click', function(e){
      	$('html,body').stop().animate({ scrollTop: $('.tabs_first').offset().top -50}, 1000);
      	$('.tt_tab3').toggleClass( "resp-tab-active" );
      	$('.tt_tab3_content').toggleClass( "resp-tab-content-active" );
      	$('.tt_tab1').removeClass( "resp-tab-active" );
      	$('.tt_tab2').removeClass( "resp-tab-active" );
      	$('.tt_tab1_content').removeClass( "resp-tab-content-active" );
      	$('.tt_tab2_content').removeClass( "resp-tab-content-active" );
      	$('.tt_tab1_content').hide();
      	$('.tt_tab2_content').hide();
      	$('.tt_tab3_content').show();
      	e.preventDefault();
      });
      $('.ontop1_1').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.tabs_first1').offset().top -50}, 1000);
     	e.preventDefault();
     	$('.tt_tab1_1').toggleClass( "resp-tab-active" );
     	$('.tt_tab1_content_1').toggleClass( "resp-tab-content-active" );
     	$('.tt_tab2_1').removeClass( "resp-tab-active" );
     	$('.tt_tab3_1').removeClass( "resp-tab-active" );
     	$('.tt_tab2_content_1').removeClass( "resp-tab-content-active" );
     	$('.tt_tab3_content_1').removeClass( "resp-tab-content-active" );
     	$('.tt_tab2_content_1').hide();
     	$('.tt_tab3_content_1').hide();
     	$('.tt_tab1_content_1').show();
     });
      $('.ontop2_1').on('click', function(e){
     	$('html,body').stop().animate({ scrollTop: $('.tabs_first1').offset().top -50}, 1000);
     	$('.tt_tab2_1').toggleClass( "resp-tab-active" );
     	$('.tt_tab2_content_1').toggleClass( "resp-tab-content-active" );
     	$('.tt_tab1_1').removeClass( "resp-tab-active" );
     	$('.tt_tab3_1').removeClass( "resp-tab-active" );
     	$('.tt_tab1_content_1').removeClass( "resp-tab-content-active" );
     	$('.tt_tab3_content_1').removeClass( "resp-tab-content-active" );
     	$('.tt_tab1_content_1').hide();
     	$('.tt_tab3_content_1').hide();
     	$('.tt_tab2_content_1').show();
     	e.preventDefault();
     });
      $('.ontop3_1').on('click', function(e){
      	$('html,body').stop().animate({ scrollTop: $('.tabs_first1').offset().top -50}, 1000);
      	$('.tt_tab3_1').toggleClass( "resp-tab-active" );
      	$('.tt_tab3_content_1').toggleClass( "resp-tab-content-active" );
      	$('.tt_tab1_1').removeClass( "resp-tab-active" );
      	$('.tt_tab2_1').removeClass( "resp-tab-active" );
      	$('.tt_tab1_content_1').removeClass( "resp-tab-content-active" );
      	$('.tt_tab2_content_1').removeClass( "resp-tab-content-active" );
      	$('.tt_tab1_content_1').hide();
      	$('.tt_tab2_content_1').hide();
      	$('.tt_tab3_content_1').show();
      	e.preventDefault();
      });
      var more_8_project = $(".tabs .tt_tab1_content table tr:nth-child(4)").nextAll();
      var col_hide_pro = more_8_project.length;
      var col_hide_pro_start = 0;
      var col_hide_pro_stop = 1000;
      more_8_project.hide();

      if (col_hide_pro > 0) {$(".show_more_t1").show();}
      else {$(".show_more_t1").hide();}

      function show_project_4 (){
      	if (col_hide_pro <= 1000){
      		more_8_project.slideDown('slow');
      		$(".show_more_t1").hide();
      	}
      	else{
      		more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
      		col_hide_pro -= 1000;
      		col_hide_pro_start = col_hide_pro_stop;
      		col_hide_pro_stop += 1000;
      	}
      }

      $(".show_more_t1").click(function(e) {
      	e.preventDefault();
      	show_project_4();
      });

 });
$(document).ready(function(){
	var more_8_project = $(".tabs .tt_tab2_content table tr:nth-child(4)").nextAll();
	var col_hide_pro = more_8_project.length;
	var col_hide_pro_start = 0;
	var col_hide_pro_stop = 1000;
	more_8_project.hide();

	if (col_hide_pro > 0) {$(".show_more_t2").show();}
	else {$(".show_more_t2").hide();}

	function show_project_4 (){
		if (col_hide_pro <= 1000){
			more_8_project.slideDown('slow');
			$(".show_more_t2").hide();
		}
		else{
			more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
			col_hide_pro -= 1000;
			col_hide_pro_start = col_hide_pro_stop;
			col_hide_pro_stop += 1000;
		}
	}

	$(".show_more_t2").click(function(e) {
		e.preventDefault();
		show_project_4();
	});
});
$(document).ready(function(){
	var more_8_project = $(".tabs .tt_tab3_content table tr:nth-child(4)").nextAll();
	var col_hide_pro = more_8_project.length;
	var col_hide_pro_start = 0;
	var col_hide_pro_stop = 1000;
	more_8_project.hide();

	if (col_hide_pro > 0) {$(".show_more_t3").show();}
	else {$(".show_more_t3").hide();}

	function show_project_4 (){
		if (col_hide_pro <= 1000){
			more_8_project.slideDown('slow');
			$(".show_more_t3").hide();
		}
		else{
			more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
			col_hide_pro -= 1000;
			col_hide_pro_start = col_hide_pro_stop;
			col_hide_pro_stop += 1000;
		}
	}

	$(".show_more_t3").click(function(e) {
		e.preventDefault();
		show_project_4();
	});
});
$(document).ready(function(){
	var more_8_project = $(".tabs .tt_tab1_content_1 table tr:nth-child(4)").nextAll();
	var col_hide_pro = more_8_project.length;
	var col_hide_pro_start = 0;
	var col_hide_pro_stop = 1000;
	more_8_project.hide();

	if (col_hide_pro > 0) {$(".show_more_t4").show();}
	else {$(".show_more_t4").hide();}

	function show_project_4 (){
		if (col_hide_pro <= 1000){
			more_8_project.slideDown('slow');
			$(".show_more_t4").hide();
		}
		else{
			more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
			col_hide_pro -= 1000;
			col_hide_pro_start = col_hide_pro_stop;
			col_hide_pro_stop += 1000;
		}
	}

	$(".show_more_t4").click(function(e) {
		e.preventDefault();
		show_project_4();
	});
});
$(document).ready(function(){
	var more_8_project = $(".tabs .tt_tab2_content_1 table tr:nth-child(4)").nextAll();
	var col_hide_pro = more_8_project.length;
	var col_hide_pro_start = 0;
	var col_hide_pro_stop = 1000;
	more_8_project.hide();

	if (col_hide_pro > 0) {$(".show_more_t5").show();}
	else {$(".show_more_t5").hide();}

	function show_project_4 (){
		if (col_hide_pro <= 1000){
			more_8_project.slideDown('slow');
			$(".show_more_t5").hide();
		}
		else{
			more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
			col_hide_pro -= 1000;
			col_hide_pro_start = col_hide_pro_stop;
			col_hide_pro_stop += 1000;
		}
	}

	$(".show_more_t5").click(function(e) {
		e.preventDefault();
		show_project_4();
	});
});
$(document).ready(function(){
	var more_8_project = $(".tabs .tt_tab3_content_1 table tr:nth-child(4)").nextAll();
	var col_hide_pro = more_8_project.length;
	var col_hide_pro_start = 0;
	var col_hide_pro_stop = 1000;
	more_8_project.hide();

	if (col_hide_pro > 0) {$(".show_more_t6").show();}
	else {$(".show_more_t6").hide();}

	function show_project_4 (){
		if (col_hide_pro <= 1000){
			more_8_project.slideDown('slow');
			$(".show_more_t6").hide();
		}
		else{
			more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
			col_hide_pro -= 1000;
			col_hide_pro_start = col_hide_pro_stop;
			col_hide_pro_stop += 1000;
		}
	}

	$(".show_more_t6").click(function(e) {
		e.preventDefault();
		show_project_4();
	});
});