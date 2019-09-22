var topEl = $("#webTop");
var headerEl = $("#webHeader");
var banner = $("#webBanner");

var winHeight = 0;
var scrollHeight = 0;
var bannerHeight = 0;

$(window).scroll(function() {
	scrollEvents();
})

$(function() {
	scrollEvents();
})

// 滚动的所以事件
function scrollEvents() {
	scrollHeight = $('body').scrollTop();
	winHeight = $(window).height();
	headerBgChange();
	// indexProductTitle();
	// fixedProductNav();

	$(".scroll-animation").each(function () {
		var offsetTop = $(this).offset().top;
		$(this).text(Math.floor(offsetTop) + "----" + Math.floor(scrollHeight))
		if (scrollHeight > offsetTop - winHeight / 1.3) {
			const mode = $(this).attr("mode");
			$(this).addClass(mode + " animated");
		}
	})
}

// 头部变色
function headerBgChange() {
	bannerHeight = banner.height();
	if (scrollHeight > bannerHeight) {
		headerEl.css({'background-color': 'rgba(255, 255, 255, 1)', 'border-bottom': '1px solid #f9f9f9'});
	} else {
		headerEl.css({'background-color': 'rgba(255, 255, 255, 0.8)', 'border-bottom': 'none'});
	}
}

// 首页产品标题
function indexProductTitle() {
	var productionTitle = $("#productionTitle");
	if (productionTitle) {
		var productionTitleHeight = productionTitle.height();
		var productionTitleOffset = scrollHeight < productionTitleHeight ? productionTitleHeight - scrollHeight : 0;
		productionTitle.css({"transform": "translate3d(0, " + productionTitleOffset + "px, 0)"});
	}
}

// 产品页面移动端滚动固定
function fixedProductNav() {
	var productNav = $("#productNav");
	if (productNav) {
		if (scrollHeight > productNav.offset().top - 70) {
			productNav.addClass("active");
		} else {
			console.log(1);
			// productNav.removeClass("active");
		}
	}
}