$(document).ready(function(){
		var theToggle = document.getElementById('toggle');

	// based on Todd Motto functions
	// http://toddmotto.com/labs/reusable-js/

	// hasClass
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	// addClass
	function addClass(elem, className) {
	    if (!hasClass(elem, className)) {
	    	elem.className += ' ' + className;
	    }
	}
	// removeClass
	function removeClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	}
	// toggleClass
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(" " + className + " ") >= 0 ) {
	            newClass = newClass.replace( " " + className + " " , " " );
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}

	theToggle.onclick = function() {
	   toggleClass(this, 'on');
	   return false;
	}
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
});