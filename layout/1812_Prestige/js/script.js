$(document).ready(function(){
	getMaxDate = function(y, m) {
        if (m == 2) {
            return y%4 || (!(y%100) && y%400 ) ? 28 : 29;
        }
        return m===4 || m===6 || m===9 || m===11 ? 30 : 31;
    };
	var time = new Date();
	    var y = time.getFullYear();
	    var m = time.getMonth()+1;
	    var d = time.getDate()+1;
	    
	    if(getMaxDate(y,m) == time.getDate()){
	        var m = time.getMonth()+2;
	        $(".demo").data('date', y+'-'+m+'-'+1);
	    }
	    else{
	        $(".demo").data('date', y+'-'+m+'-'+d);
	    }
	    $(".demo").TimeCircles({
	       	start: true, // determines whether or not TimeCircles should start immediately.
	        animation: "smooth", // smooth or ticks. The way the circles animate can be either a constant gradual rotating, slowly moving from one second to the other.
	        count_past_zero: true, // This option is only really useful for when counting down. What it does is either give you the option to stop the timer, or start counting up after you've hit the predefined date (or your stopwatch hits zero).
	         circle_bg_color: "#dceaf3", // determines the color of the background circle.
	        // use_background: true, // sets whether any background circle should be drawn at all.
	        // fg_width: 0.03, //  sets the width of the foreground circle.
	        // bg_width: 1.0, // sets the width of the backgroundground circle.
	        // text_size: 0.9, // This option sets the font size of the text in the circles.
	        // total_duration: "Auto", // This option can be set to change how much time will fill the largest visible circle.
	        // direction: "Clockwise", // "Clockwise", "Counter-clockwise" or "Both".
	        // use_top_frame: false,
	        // start_angle: 0, // This option can be set to change the starting point from which the circles will fill up.
	        time: { //  a group of options that allows you to control the options of each time unit independently.
	        Days: {
	            show: false,
	                text: "Days",
	                color: "#fff"
	        },
	        Hours: {
	            show: true,
	                text: "Часы",
	                color: "#d7410c"
	        },
	        Minutes: {
	            show: true,
	                text: "Минуты",
	                color: "#d7410c"
	        },
	        Seconds: {
	            show: true,
	                text: "Секунды",
	                color: "#d7410c"
	        }
	    }}
	    );
	    $('.bxslider').bxSlider({
	    	pager: false
	    });
	    $('.tel_phone').mask('+38 (999) 999-99-99');
});