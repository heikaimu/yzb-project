/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 13:59:03
 */

var wWidth = null;
var wHeight = null;

$(function () {
  wWidth = $(window).width();
  wHeight = $(window).height();

  // wow.js
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: true
  });
  wow.init();

  // 头部
  setHeaderBg();
  $(".web-header").each(function () {
    var header = $(this);
    var search = $(this).find(".search-bar");
    var searchOpenSwitch = $(this).find(".search-bar-show");
    var searchCloseSwitch = $(this).find(".search-bar-close");
    var navSwitch = $(this).find(".web-nav-switch");
    var nav = $(this).find(".web-nav");

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

    navSwitch.click(function() {
      if (navSwitch.hasClass("active")) {
        navSwitch.stop().removeClass("active");
        nav.slideUp();
        $("html").css({"overflow-y": "auto"});
      } else {
        navSwitch.addClass("active");
        nav.stop().slideDown();
        $("html").css({"overflow-y": "hidden"});
      }
    })
  })

  $(".r-view").each(function() {
    var type= $(this).attr("_type");
    var src = $(this).attr("_src");
    $(this).click(function() {
      if (type === 'picture') {
        $("#picture_view_wrapper").fadeIn().find(".content").append('<img src="' + src + '"/>');
      } else if (type === 'video') {
        $("#picture_view_wrapper").fadeIn().find(".content").append('<video src="'+ src +'" controls="controls">您的浏览器不支持 video 标签。</video>');
      }
    })
  })
  $(".picture-view-container").each(function() {
    var float = $(this);
    var closeBtn = $(this).find(".icon-close");
    closeBtn.click(function() {
      float.fadeOut().find(".content").empty();
    })
  })

})

$(window).scroll(function () {
  setHeaderBg();
});


// 头部背景色
function setHeaderBg() {
  if (wWidth) {
    var wScrollDis = Math.abs($(window).scrollTop());
    var percent = Math.min(1, wScrollDis / 100);
    // $(".web-header").css({ "background-color": "rgba(255,255,255," + percent + ")" });
    if (percent === 1) {
      $(".web-header").addClass("active");
    } else {
      $(".web-header").removeClass("active");
    }
    // $(".web-header").css({ "color": percent < 0.6 ? "#ffffff" : "#333" });
    // $(".web-header").css({ "border-bottom": percent === 1 ? "1px solid #e7e7e7" : "none" });
  }
}