$(document).ready(function () {
        $(".sub > a").click(function() {
            var ul = $(this).next(),
                    clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                    height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
            clone.remove();
            ul.animate({"height":height});
            return false;
        });
           $('.mini-menu > ul > li > a').click(function(){
           $('.sub a').removeClass('active');
           $(this).addClass('active');
        }),
           $('.sub ul li a').click(function(){
           $('.sub ul li a').removeClass('active');
           $(this).addClass('active');
        });
      $('#nav').spasticNav();
      $('.bxslider').bxSlider();
      var slider1 = $('.bxslider3').bxSlider({
    adaptiveHeight: true,
    slideWidth: 256,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 20,
    pager:false,
    loop: false
  })
    if ($(window).innerWidth() <= '952'){
      var slider1 = $('.bxslider3').bxSlider({
        slideWidth: 256,
        minSlides: 1,
        pager: false,
        slideMargin: 0,
        adaptiveHeight: false,
        controls: true
      })
    }
            $(".sub > a").click(function() {
            var ul = $(this).next(),
                    clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                    height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
            clone.remove();
            ul.animate({"height":height});
            return false;
        });
           $('.mini-menu > ul > li > a').click(function(){
           $('.sub a').removeClass('active');
           $(this).addClass('active');
        }),
           $('.sub ul li a').click(function(){
           $('.sub ul li a').removeClass('active');
           $(this).addClass('active');
        });
           $("#nav li a").click(function() {
           $('.navbar-collapse').removeClass('in');
           });
    });
