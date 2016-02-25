$(document).ready(function () {
  var checkbox = $('div.filters-container').find('input:checkbox');

  checkbox.attr("checked", false);

  checkbox.on('click', function () {
    $('.test').css({"opacity" : "0"});
    $('div.filters-container').find('input:checked').each(function () {
      $('.test.' + $(this).attr('rel')).css({"opacity" : ".8"});
    });
  });
});