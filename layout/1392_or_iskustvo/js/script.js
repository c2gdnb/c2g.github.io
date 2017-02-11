$(document).ready(function() {

  var clock;
    
    $(document).ready(function() {
      var clock;

      clock = $('.your-clock').FlipClock({
            language: 'ru',
            clockFace: 'HourlyCounter'
        });
            
        clock.setTime(129600);
        clock.setCountdown(true);
        clock.start();

    });
    // ПОРТФОЛИО
 // портфолио в пределах от 961px до 1440px
 if ($(window).innerWidth() <= '520'){
 var more_6_project = $(".review_block:nth-child(3)").nextAll();
 var col_hide_pro_3 = more_6_project.length;
 var col_hide_pro_start = 0;
 var col_hide_pro_stop = 3;
 more_6_project.hide();

 if (col_hide_pro_3 > 0) {$(".more_portfolio").show();}
 else {$(".more_portfolio").hide();}

 function show_project_3 (){
  if (col_hide_pro_3 <= 3){
    more_6_project.slideDown('slow');
    $(".more_portfolio").hide();
  }
  else{
    more_6_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
    col_hide_pro_3 -= 3;
    col_hide_pro_start = col_hide_pro_stop;
    col_hide_pro_stop += 3;
  }
 }

 $(".more_portfolio").click(function(e) {
  e.preventDefault();
  show_project_3();
 });
 }
 // портфолио в остальных случаях
 else{
 var more_8_project = $(".img_block:nth-child(9)").nextAll();
 var col_hide_pro = more_8_project.length;
 var col_hide_pro_start = 0;
 var col_hide_pro_stop = 4;
 more_8_project.hide();

 if (col_hide_pro > 0) {$(".more_portfolio").show();}
 else {$(".more_portfolio").hide();}

 function show_project_4 (){
  if (col_hide_pro <= 4){
    more_8_project.slideDown('slow');
    $(".more_portfolio").hide();
  }
  else{
    more_8_project.slice(col_hide_pro_start,col_hide_pro_stop).slideDown('slow');
    col_hide_pro -= 4;
    col_hide_pro_start = col_hide_pro_stop;
    col_hide_pro_stop += 4;
  }
 }

 $(".more_portfolio").click(function(e) {
  e.preventDefault();
  show_project_4();
 });
 }
  
});  