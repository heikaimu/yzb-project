$(function () {

  // 头部
  $(".web-header").each(function () {
    var header = $(this);
    var search = $(this).find(".web-header__searchbar__dialog");
    var searchOpenSwitch = $(this).find(".web-header__searchbar__button--open");
    var searchCloseSwitch = $(this).find(".web-header__searchbar__button--close");
    var navSwitch = $(this).find(".web-header__nav__switch--mobile");
    var nav = $(this).find(".web-header__nav");

    nav.lavaLamp({ fx: "swing", speed: 500 });

    searchOpenSwitch.click(function () {
      search.slideDown();
    })

    searchCloseSwitch.click(function () {
      search.slideUp();
    })

    header.mouseleave(function () {
      search.slideUp();
    })

    navSwitch.click(function () {
      if (navSwitch.hasClass("active")) {
        navSwitch.stop().removeClass("active");
        nav.removeClass("active");
        $("html").css({ "overflow-y": "auto" });
      } else {
        navSwitch.addClass("active");
        nav.addClass("active");
        $("html").css({ "overflow-y": "hidden" });
      }
    })

    // mobileBlank.click(function () {
    //   mobileBlank.fadeOut();
    //   navSwitch.stop().removeClass("active");
    //   nav.removeClass("active");
    //   $("html").css({ "overflow-y": "auto" });
    // })
  })

  // 底部友情链接
  $("#footer_link").change(function() {
    var link = $(this).val();
    window.open(link);
  })
  
})