$(document).ready(function(){
	$(window).on('load', function () {
		var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
		$spinner.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	});
	(function(window){

    // get vars
    var searchEl = document.querySelector("#input");
    var labelEl = document.querySelector("#label");

    // register clicks and toggle classes
    labelEl.addEventListener("click",function(){
    	if (classie.has(searchEl,"focus")) {
    		classie.remove(searchEl,"focus");
    		classie.remove(labelEl,"active");
    	} else {
    		classie.add(searchEl,"focus");
    		classie.add(labelEl,"active");
    	}
    });

    // register clicks outisde search box, and toggle correct classes
    document.addEventListener("click",function(e){
    	var clickedID = e.target.id;
    	if (clickedID != "search-terms" && clickedID != "search-label") {
    		if (classie.has(searchEl,"focus")) {
    			classie.remove(searchEl,"focus");
    			classie.remove(labelEl,"active");
    		}
    	}
    });
}(window));
    ('.cat').hover(
  function () {
    $(this).show();
  }, 
  function () {
    $(this).hide();
  }
);
});