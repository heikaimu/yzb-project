/*
 * @Description: 数字滚动到指定的值
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-29 14:00:50
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 14:25:11
 */
(function ($) {
  // 数字滚动
  $.fn.runNumber = function (duration) {
    duration = duration ? duration : 2000;
    var step = 100;
    var el = $(this);
    var runNum = 0;
    var num = el.text();
    num = Number(num);
    var stepTime = duration / Math.floor(num / 100);

    el.text(0);

    if (isNaN(num)) {
      return;
    }

    const timer = setInterval(function () {
      runNum += step;
      if (runNum >= num) {
        runNum = num;
        clearInterval(timer);
      }
      el.text(runNum);
    }, stepTime);
  }

  // 导航
  $.fn.lavaLamp = function (o) {
    o = $.extend({
      fx: "linear",
      speed: 500,
      li: 'li',
      click: function () { }
    }, o || {});
    return this.each(function () {
      var b = $(this),
        noop = function () { },
        $line = $('<div class="line"></div>').appendTo(b),
        $li = $(o.li, this),
        curr = $("li.active", this)[0] || $($li[0]).addClass("active")[0];
      $li.not(".line").hover(function () {
        move(this)
      }, noop);
      $(this).hover(noop, function () {
        move(curr)
      });
      $li.click(function (e) {
        setCurr(this);
        return o.click.apply(this, [e, this])
      });
      setCurr(curr);

      function setCurr(a) {
        $line.css({
          "left": a.offsetLeft + "px",
          "width": a.offsetWidth + "px"
        });
        curr = a
      }

      function move(a) {
        $line.each(function () {
          $(this).dequeue()
        }).animate({
          width: a.offsetWidth,
          left: a.offsetLeft
        }, o.speed, o.fx)
      }
    })
  }

  // tab切换
  $.fn.tabSwitch = function() {
    this.each(function () {
      const tabTitle = $(this).find(".tab-title li");
      const tabList = $(this).find(".tab-list li");
      tabTitle.eq(0).addClass("active");
      tabList.eq(0).show().siblings("li").hide();

      tabTitle.hover(function() {
        $(this).addClass("active").siblings("li").removeClass("active");
        tabList.eq($(this).index()).show().siblings("li").hide();
      })
    })
  }

  // 滚动到当前元素位置
  $.fn.scrollInto = function (params) {
    var offsetDistance = 0;
    var duration = 500;

    if (params) {
      offsetDistance = params.offsetDistance || offsetDistance;
      duration = params.duration || duration;
    }
    
    var scrollDistance = $(this).offset().top + offsetDistance + 'px';

    $("html,body").animate({
      scrollTop: scrollDistance
    }, duration);
  }
}(jQuery));
