$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager:false
  });
  $( "#booking-date" ).selectmenu();
  $( "#booking-count" ).selectmenu();
  $('#toggle').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('move');
        } else {
            $(this).addClass('active');
            $('body').addClass('move');
            ulHeight = $('#menu ul').height();
            $('#menu').css('paddingTop', $(window).height() / 2 - ulHeight / 1);
        }
    });
    $('#menu .close').click(function(e) {
        e.preventDefault();
        $('#toggle').click();
    });
    $('#menu a').click(function(e) {
        e.preventDefault();
        $(this).hasClass('active')
        $('#toggle').removeClass('active');
        $('body').removeClass('move');
    });
});