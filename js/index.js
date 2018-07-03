$(document).ready(function () {
  var checkbox = $(".single-filter").find("input:checkbox");
  var allFilter = $(".all-filter").find("input:checkbox");

  checkbox.prop("checked", false);
  allFilter.prop("checked", true);

  $("#play-animation").on("click", function () {
    this.remove();

    allFilter.prop("checked", true);
  });

  checkbox.on("click", function () {
    $(".element-animated").css({"opacity" : "0"});
    $("div.filters-container").find("input:checked").each(function () {
      $(".element-animated." + $(this).attr("rel")).css({"opacity" : ".8"});
    });
  });
});