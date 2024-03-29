var owlState = false;

$(window).on('load', function () {
	SetNewsHeight();
	MainTriggersCarousel();
});

$(window).on('resize', function () {
	SetNewsHeight();
	MainTriggersCarousel();
});

//устанавниаем одинаковую(максимальную) высоту в ряду у заголовков новостей
function SetNewsHeight(){
	var $sections = $('.b-news__cols-wrap');
	if($sections.length){
		$sections.each(function () {
		    var $this_section = $(this);
			var $items = $(this).find('.b-news-card');
			if($items && $items.length > 0){
				var all_width = $this_section.width();
				var width = $items.first().parent().width();
				var in_line = parseInt(all_width/width)
				var i,j,temparray,chunk = in_line;

				if(chunk > 0) {
                    for (i = 0, j = $items.length; i < j; i += chunk) {
                        temparray = $items.slice(i, i + chunk);
                        var max_height = 0;
                        var height = 0;
                        temparray.each(function () {
                            $(this).find('.b-title-4').css('height', 'auto');
                            height = $(this).find('.b-title-4').height();
                            if (height > max_height) {
                                max_height = height;
                            }
                        });

                        temparray.each(function () {
                            $(this).find('.b-title-4').height(max_height);
                        });
                    }
                }
			}
		});
	}
}

function MainTriggersCarousel() {

	var owl = $('.b-header_bottom');
	if ($( window ).width() <= 640){
		if(owlState == false){
			owl.addClass('owl-carousel');
				owl.owlCarousel({
				loop:false,
				nav:false,
				items:1,
				margin:0,
				autoWidth:false,
				navText:[],
				dots:true
			});
			owlState = true;
		};
	};
	if ($( window ).width() > 640){
		if (owlState == true){
			owl.removeClass('owl-carousel');
			owl.trigger('destroy.owl.carousel');
			owlState=false;
		};
	};
};

$('body').on('click','.b-header-link_navicon', function (e) {
	$(this).toggleClass('b-header-link_close');
	$('.b-nav').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
	closeOtherMobileMenu($(this));
});
$('body').on('click','.b-header-link_email', function (e) {
	$(this).toggleClass('b-header-link_close');
	$('.b-header__top-l').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
	closeOtherMobileMenu($(this));
});
$('body').on('click','.b-header-link_phone', function (e) {
	$(this).toggleClass('b-header-link_close');
	$('.b-header__top-r').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
	closeOtherMobileMenu($(this));
});

function checkHeader(tagClass){		
	if($(tagClass).closest('.js-menu').length){
		//если активно мобильное меню
		$('.b-header-mobile').addClass('b-header-mobile_active-menu');
	}else{
		//если не активно моб меню
		$('.b-header-mobile').removeClass('b-header-mobile_active-menu');
	}
}
function closeOtherMobileMenu($this) {

	if($this.hasClass('b-header-link_navicon')){
		//если открываем меню
		$('.b-header-link_phone').removeClass('b-header-link_close');
		$('.b-header-link_email').removeClass('b-header-link_close');
		$('.b-header__top-l').removeClass('js-menu');
		$('.b-header__top-r').removeClass('js-menu');
		checkHeader('.b-nav');
	}else if($this.hasClass('b-header-link_email')){
		//если открываем мыло
		$('.b-header-link_navicon').removeClass('b-header-link_close');
		$('.b-header-link_phone').removeClass('b-header-link_close');
		$('.b-nav').removeClass('js-menu');
		$('.b-header__top-r').removeClass('js-menu');
		checkHeader('.b-header__top-l');
	}else if($this.hasClass('b-header-link_phone')){
		//если открываем телефон
		$('.b-header-link_navicon').removeClass('b-header-link_close');
		$('.b-header-link_email').removeClass('b-header-link_close');
		$('.b-header__top-l').removeClass('js-menu');
		$('.b-nav').removeClass('js-menu');
		checkHeader('.b-header__top-r');
	};
}
