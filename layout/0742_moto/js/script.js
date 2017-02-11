$(document).ready(function(){
  $('.bxslider').bxSlider();

});
$("#current_option").click(function(){
    customOptionsBlock = $("#custom_options");
    if (customOptionsBlock.is(":hidden")) {
        $("#custom_options").show();
    }
    else {
        $("#custom_options").hide();
    }
});

$("#custom_options li").click(function(){
    choosenValue = $(this).attr("data-value");
    $("select").val(choosenValue).prop("selected", true);
    $("#current_option span").text($(this).text());
    $("#current_option").attr("data-value", choosenValue);
});

$('#carousel ul').carouFredSel({
				prev: '#prev',
				next: '#next',
				pagination: "#pager",
				auto: true,
				scroll: 1000,
				pauseOnHover: true
			});


