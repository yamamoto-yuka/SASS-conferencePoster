$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".nav-links").toggleClass("open");
  $(".nav-links li").each(function () {
    $(this).toggleClass("listfade");
  });
});
