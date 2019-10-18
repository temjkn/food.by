$(function() {
    function cutLongText(textSize, finalLength) {
      $('.b-text__title').each(function() {
        if ($(this).text().length > textSize) {
          $(this).html($(this).text().slice(0, finalLength) + '...');
        }
      })
    }
    cutLongText(97, 97);
  });
$(function() {
    function cutLongText(textSize, finalLength) {
      $('.b-text__description').each(function() {
        if ($(this).text().length > textSize) {
          $(this).html($(this).text().slice(0, finalLength) + '...');
        }
      })
    }
    cutLongText(97, 201);
  });