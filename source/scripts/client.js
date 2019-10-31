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
	if ($( window ).width() < 640){
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
	if ($( window ).width() >= 640){
		if (owlState == true){
			owl.removeClass('owl-carousel');
			owl.trigger('destroy.owl.carousel');
			owlState=false;
		};
	};
};

$('.b-header-link_navicon').on('click', function(){
	$('.b-header-link_navicon').toggleClass('b-header-link_close');
	$('.b-nav').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
});

$('.b-header-link_email').on('click', function(){
	$('.b-header-link_email').toggleClass('b-header-link_close');
	$('.b-header__top-l').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
});

$('.b-header-link_phone').on('click', function(){
	$('.b-header-link_phone').toggleClass('b-header-link_close');
	$('.b-header__top-r').toggleClass('js-menu');
	$('.b-header-mobile').toggleClass('b-header-mobile_active-menu');
});
