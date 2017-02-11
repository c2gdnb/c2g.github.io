$(document).ready(function() {
    $(function() {
        $('.slider').unslider({
            delay:3000,
            dots: true,
        });
    });

    $(function() {
        $('.item-slider').unslider({
            delay:false,
            arrows:true,
        });
    });
   $(document).ready(function() {
				$('.basic').fancySelect();

				// Boilerplate
				var repoName = 'fancyselect'

				$.get('https://api.github.com/repos/octopuscreative/' + repoName, function(repo) {
					var el = $('#top').find('.repo');

					el.find('.stars').text(repo.watchers_count);
					el.find('.forks').text(repo.forks_count);
				});

				var menu = $('#top').find('menu');

				function positionMenuArrow() {
					var current = menu.find('.current');

					menu.find('.arrow').css('left', current.offset().left + (current.outerWidth() / 2));
				}

				$(window).on('resize', positionMenuArrow);

				menu.on('click', 'a', function(e) {
					var el = $(this),
						href = el.attr('href'),
						currentSection = $('#main').find('.current');

					e.preventDefault();

					menu.find('.current').removeClass('current');

					el.addClass('current');

					positionMenuArrow();

					if (currentSection.length) {
						currentSection.fadeOut(300).promise().done(function() {
							$(href).addClass('current').fadeIn(300);
						});
					} else {
						$(href).addClass('current').fadeIn(300);
					}
				});

				menu.find('a:first').trigger('click')
			});

    $(function () {
        $('.parameters>li .aside-menu-item').click(function() {
            $(this).parent().toggleClass('opened');
        });
    });
    
    $(function () {
        $('.table-collections').click(function() {
            $('.item-table').children().fadeOut();
            $('.table-inset').removeClass('open');
            $(this).addClass('open');
            $('.table-collections-container').fadeIn(500);
        });
    });
    
    $(function () {
        $('.table-installation').click(function() {
            $('.item-table').children().fadeOut();
            $('.table-inset').removeClass('open');
            $(this).addClass('open');
            $('.table-installation-container').fadeIn(500);
        });
    });
    
    $(function () {
        $('.table-technical').click(function() {
            $('.item-table').children().fadeOut();
            $('.table-inset').removeClass('open');
            $(this).addClass('open');
            $('.item-table-info-container').fadeIn(500);
        });
    });

    $(function () {
        $('div.minus').click(function(){
            var _input = $(this).next('input');
            var _value1 = parseInt(_input.val());
            if(_value1 >= 1){
                var _value2 = _value1 - 1;
                _input.val(_value2);	
            }
        });
        $('div.plus').click(function(){
            var _input = $(this).prev('input');
            var _value1 = parseInt(_input.val());
                var _value2 = _value1 + 1;
                _input.val(_value2);	
        });
    });

    $(function () {
        $('.aside-list>li').click(function() {
            $(this).toggleClass('active');
        });
    });



    //$(function () {
    //    $('.city-select li').click(function() {
    //        $('.city-select').slideUp(300);
    //        $('.header-geo a').replaceWith('<a href="#">' + $(this).text() + '<a/>');
    //    });
    //});



    $(document).mouseup(function (e)
    {
        var container = $(".city-select");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.slideUp(300);
        }
    });

    $(function () {
        $('.login').click(function() {
            $('.login-popup').slideDown(300);
        });
    });

    $(document).mouseup(function (e)
    {
        var container = $(".login-popup");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.slideUp(300);
        }
    });

    $(function() {
        $( ".parameters-slider" ).slider({
          range: true,
          min: 0,
          max: 100,
          values: [ 20, 100 ],
          slide: function( event, ui ) {
            $( ".min-price" ).val( "$" + ui.values[ 0 ] );
            $( ".max-price" ).val( "$" + ui.values[ 1 ] );
          }
        });
    });
});

function CentriredModalWindow(ModalName){
	$(ModalName).css({"display":"block","opacity":0});
	var modalH = $(ModalName).height();
	var modalW = $(ModalName).width();
	$(ModalName).css({"margin-left":"-"+(parseInt(modalW)/2)+"px","margin-top":"-"+(parseInt(modalH)/2)+"px"})
}

function OpenModalWindow(ModalName){
	$(ModalName).animate({"opacity":1},300);
	$("#bgmod").css("display","block");
}

function CloseModalWindow(){
		$(".modal").css({"opacity":1});
		$(".modal").animate({"opacity":0},300);
		setTimeout(function() { $(".modal").css({"display":"none"}); }, 500)
}
function add_to_cart(id,count){
	var ModalName = $('#addItemInCart');
	CentriredModalWindow(ModalName);
	OpenModalWindow(ModalName);
//$(thiselem).addClass('added');	
$.post(
	'/ajax/add_to_cart.php',
	{action:"ADD2BASKET",id:id,count:count})
	.done(function (Res) {
		$('.cart-container').html(Res);
	});
return false;
}
function add_to_cart_order(id,count){
$.post(
	'/ajax/add_to_cart.php',
	{action:"ADD2BASKET",id:id,count:count})
	.done(function (Res) {
		location.reload();
	});
return false;
}
function show_lamps(id){
	var ModalName = $('#recommend_lamps'+id);
	CentriredModalWindow(ModalName);
	OpenModalWindow(ModalName);
return false;
}
function openCallPopup(){
	var authPopup = BX.PopupWindowManager.create("CallPopup", null, {
		autoHide: true,			
		offsetLeft: 0,
		offsetTop: 0,
		overlay : true,
		draggable: {restrict:true},
		closeByEsc: true,
		closeIcon: { right : "-8px", top : "-15px"},
		content: '<div style="width:307px;height:290px; text-align: center;"><span style="position:absolute;left:50%; top:50%"><img src="/images/wait.gif"/></span></div>',
		events: {
			onAfterPopupShow: function()
			{
				BX.ajax.post(
						'/ajax/call.php',
						{
							
						},
						BX.delegate(function(result)
						{
							this.setContent(result);
						},
						this)
				);
			}
		}
	});
	authPopup.show();
}
function openCityPopup(){
	var authPopup = BX.PopupWindowManager.create("CityPopup", null, {
		autoHide: true,			
		offsetLeft: 0,
		offsetTop: 0,
		overlay : true,
		draggable: {restrict:true},
		closeByEsc: true,
		closeIcon: { right : "-8px", top : "-15px"},
		content: '<div style="width:896px;height:674px; text-align: center;"><span style="position:absolute;left:50%; top:50%"><img src="/images/wait.gif"/></span></div>',
		events: {
			onAfterPopupShow: function()
			{
				BX.ajax.post(
						'/ajax/city.php',
						{
							
						},
						BX.delegate(function(result)
						{
							this.setContent(result);
						},
						this)
				);
			}
		}
	});
	authPopup.show();
}
function openBuyPopup(){
	var authPopup = BX.PopupWindowManager.create("BuyPopup", null, {
		autoHide: true,			
		offsetLeft: 0,
		offsetTop: 0,
		overlay : true,
		draggable: {restrict:true},
		closeByEsc: true,
		closeIcon: { right : "-8px", top : "-15px"},
		content: '<div style="width:307px;height:290px; text-align: center;"><span style="position:absolute;left:50%; top:50%"><img src="/images/wait.gif"/></span></div>',
		events: {
			onAfterPopupShow: function()
			{
				BX.ajax.post(
						'/ajax/fastbuy.php',
						{
							
						},
						BX.delegate(function(result)
						{
							this.setContent(result);
						},
						this)
				);
			}
		}
	});
	authPopup.show();
}