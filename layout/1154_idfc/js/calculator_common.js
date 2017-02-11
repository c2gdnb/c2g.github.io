 $(document).ready(function(){
 	 jQuery("[data-slider]")
                    .bind("slider:ready slider:changed", function (event, data) {
                        var pdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                       
                        var persons = pdata[ parseInt($(".persons").val()) - 1];

                        var lambdaq = 10;
                        var lambda = 490;
                        var lambday = 4900;

                        var sample3 = $(".persons").val();
                        sample3 *= 10;
                        $("#slide4 .dragger_lable1").html(sample3 + ' GB');
                      	
                      	$(".totalq").html(persons * lambdaq);
                        $(".total").html(persons * lambda);
                        $(".total_year").html(persons * lambday);
                    });
 	 });
  $(document).ready(function(){
 	 jQuery("[data-slider]")
                    .bind("slider:ready slider:changed", function (event, data) {
                        var pdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18 ,19, 20];
                       
                        var persons = pdata[ parseInt($(".persons1").val()) - 1];

                        var lambdaq = 5;
                        var lambda = 490;
                        var lambday = 4900;

                        var sample4 = $(".persons1").val();
                        sample4 *= 5;
                        $("#slide5 .dragger_lable1").html(sample4 + ' GB');
                      	
                      	$(".totalq1").html(persons * lambdaq);
                        $(".total1").html(persons * lambda);
                        $(".total_year1").html(persons * lambday);
                    });
 	 });
      $(document).ready(function(){
   $("#slide2 .dragger").append("<div class='dragger_lable'></div>");

   $("#slide3 .dragger").append("<div class='dragger_lable'></div>");
 
   $("#slide1 .dragger").append("<div class='dragger_lable2'></div>");

   $("#slide6 .dragger").append("<div class='dragger_lable2'></div>");

   $("#slide7 .dragger").append("<div class='dragger_lable'></div>");
 
   $("#slide8 .dragger").append("<div class='dragger_lable'></div>");
   
   $("#slide4 .dragger").append("<div class='dragger_lable1'></div>");
   
   $("#slide5 .dragger").append("<div class='dragger_lable1'></div>");

  $("#slide1 .dragger_lable2").html('2 X 2.4Ghz');
	$("#slide2 .dragger_lable").html('2 GB');
	$("#slide3 .dragger_lable").html('10 GB');
  $("#slide4 .dragger_lable1").html('10 GB');
	$("#slide5 .dragger_lable1").html('5 GB');
  $("#slide6 .dragger_lable2").html('1 X 2.4Ghz');
  $("#slide7 .dragger_lable").html('2 GB');
  $("#slide8 .dragger_lable").html('10 GB');
   	   
   });
    $(document).ready(function(){
 	  jQuery("[data-slider]")
                    .bind("slider:ready slider:changed", function (event, data) {
                        // var pdata = [];
                        var ldata = [0, 990, 1980, 2970, 3960, 4950, 5940, 6930,];
                        var prdata = [0, 590, 1180, 1170, 2360, 2950, 3540, 4130, 4720, 5310];
                        var all = 1500;

                        // var persons = pdata[ parseInt($(".persons2").val()) - 1];
                        var products = prdata[ parseInt($(".products2").val()) - 1];
                        var level = ldata[ parseInt($(".level2").val()) - 1];

                        
                         var lambda = 1;
                         var lambday = 10;
                         var year = all * 10 ;
                         var result = (products + level)  * lambday + year;
                         // result = result - (result * 0.165);
                         result = result.toFixed(0);
                         var sample = 1;
                         sample = $(".level2").val();
                         sample *= 2;
                         $("#slide2 .dragger_lable").html(sample + ' GB');
                         
                         $("#slide1 .dragger_lable2").html(sample + ' X 1.4Ghz');
                         
                        var sample1 = $(".products2").val();
                        sample1 *= 10;
                        $("#slide3 .dragger_lable").html(sample1 + ' GB');

                        $(".total2").html(products + level * lambda + all);
                        $(".totaly2").html(result);

 
                    });

 	 });
 $(document).ready(function(){
    jQuery("[data-slider]")
                    .bind("slider:ready slider:changed", function (event, data) {
                        // var pdata = [];
                        var ldata = [0, 990, 1980, 2970, 3960, 4950, 5940, 6930,];
                        var prdata = [0, 590, 1180, 1170, 2360, 2950, 3540, 4130, 4720, 5310];
                        var all = 1500;

                        // var persons = pdata[ parseInt($(".persons2").val()) - 1];
                        var products = prdata[ parseInt($(".products3").val()) - 1];
                        var level = ldata[ parseInt($(".level3").val()) - 1];

                        
                         var lambda = 1;
                         var lambday = 10;
                         var year = all * 10 ;
                         var result = (products + level)  * lambday + year;
                         // result = result - (result * 0.165);
                         result = result.toFixed(0);
                         var sample5 = 1;
                         sample5 = $(".level3").val();
                         sample5 *= 2;
                         $("#slide7 .dragger_lable").html(sample5 + ' GB');
                         
                         $("#slide6 .dragger_lable2").html(sample5 + ' X 2.4Ghz');
                         
                        var sample6 = $(".products3").val();
                        sample6 *= 10;
                        $("#slide8 .dragger_lable").html(sample6 + ' GB');

                        $(".total3").html(products + level * lambda + all);
                        $(".totaly3").html(result);

 
                    });

   });
$(document).ready(function(){
	  $("#slide2 .dragger").mousemove(function () {
  var leftP = $(this).css('left');
  $("#slide1 .dragger").css({'left': leftP});
  $("#slide1 .highlight-track").css({'width': leftP});
});
});
$(document).ready(function(){
    $("#slide7 .dragger").mousemove(function () {
  var leftP = $(this).css('left');
  $("#slide6 .dragger").css({'left': leftP});
  $("#slide6 .highlight-track").css({'width': leftP});
});
});
