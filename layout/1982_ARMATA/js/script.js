$(document).ready(function(){
	$('.bxslider').bxSlider();
	$('.bxslider1').bxSlider({
		controls:false,
		pager:false,
		auto:true
	});
	$('.open_modal').click(function(e){ 
		e.preventDefault(); 
		$('#overlay').fadeIn('fast',function(){ 
			$('#nonebox').animate({'top':'40%'},500); 
		});
	});
	
	$('.box-close.one,.overlay').click(function(e){
		e.preventDefault(); 
		$('.nonebox').animate({'top':'-1100px'},500,function(){
			$('.overlay').fadeOut('fast');
		});
		
	});
	$('.size_modal').click(function(e){ 
		e.preventDefault(); 
		$('#overlay2').fadeIn('fast',function(){ 
			$('#nonebox2').animate({'top':'40%'},500); 
		});
	});
	
	$('.box-close.one,.overlay').click(function(e){
		e.preventDefault(); 
		$('#nonebox').animate({'top':'-1100px'},500,function(){
			$('#overlay').fadeOut('fast');
		});
		
	});
	$('.fancybox').fancybox();
});