$(document).ready(function () {
  var checkbox = $('.single-filter').find('input:checkbox');
  checkbox.attr("checked", false);
  $('.all-filter').find('input:checkbox').attr("checked", true);

  $('#play-animation').on('click', function () {
    this.remove();

    $('.main-container').find('.element-animated').each(function (){
      this.classList.add("animation-running");
    });

    $('.all-filter').find('input:checkbox').attr("checked", true);
  });

  checkbox.on('click', function () {
    $('.element-animated').css({"opacity" : "0"});
    $('div.filters-container').find('input:checked').each(function () {
      $('.element-animated.' + $(this).attr('rel')).css({"opacity" : ".8"});
    });
  });
});