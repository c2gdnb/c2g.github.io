$(document).ready(function(){
	(function($){
		$(window).on("load",function(){
			$(".news_wrap").mCustomScrollbar();
		});
	})(jQuery);
	(function($){
		$(window).on("load",function(){
			$("#demotab").mCustomScrollbar();
		});
	})(jQuery);
	(function($){
		$(window).on("load",function(){
			$(".main_content_wrap .col_content4 .brd").mCustomScrollbar();
		});
	})(jQuery);
	$('#demotab').easyResponsiveTabs({
            type: 'accordion', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1' // The tab groups identifier

        });
	$('#demotab2').easyResponsiveTabs({
            type: 'accordion', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1' // The tab groups identifier
        });
	var hash = '#tab5',
	lis = $("ul.resp-tabs-list > li");
	lis.removeClass("resp-tab-active");
	$("a[href='" + hash + "']").addClass("resp-tab-active"); 
	var swiper = new Swiper('.swiper-container', {
		paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		slidesPerView: 5,
		paginationClickable: true,
		spaceBetween: 30
	});
	var swiperH = new Swiper('.swiper-container1', {
        centeredSlides: true,
        autoplay: 6000
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
	$('#menu .close,#menu li a').click(function(){
		$('#toggle').click();
	});
	$('.blind_button').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('blind');
		} 
		else {
			$(this).addClass('active');
			$('body').addClass('blind');
		}
		});
});