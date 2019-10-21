$(window).on('load', function () {
	SetNewsHeight();
});

$(window).on('resize', function () {
	SetNewsHeight();
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

//
// $(function() {
//     function cutLongText(textSize, finalLength) {
//       $('.b-text__title').each(function() {
//         if ($(this).text().length > textSize) {
//           $(this).html($(this).text().slice(0, finalLength) + '...');
//         }
//       })
//     }
//     cutLongText(97, 97);
//   });
// $(function() {
//     function cutLongText(textSize, finalLength) {
//       $('.b-text__description').each(function() {
//         if ($(this).text().length > textSize) {
//           $(this).html($(this).text().slice(0, finalLength) + '...');
//         }
//       })
//     }
//     cutLongText(97, 201);
//   });