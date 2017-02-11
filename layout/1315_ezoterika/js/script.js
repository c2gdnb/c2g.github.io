$(document).ready(function() {
   $('.custom-file-input').on('change', function() {
      realVal = $(this).val();
      lastIndex = realVal.lastIndexOf('\\') + 1;
      if(lastIndex !== -1) {
         realVal = realVal.substr(lastIndex);
         $(this).prev('.mask').find('.fileInputText').val(realVal);
      }
   });
   $(".hide_block").hide();
	$("h3 span").click(function(){
	$(this).parent().next().slideToggle();
});
});