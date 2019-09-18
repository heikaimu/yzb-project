var topEl = $("#webTop");
var headerEl = $("#webHeader");
var banner = $("#webBanner");

var winHeight = 0;
var scrollHeight = 0;
var bannerHeight = 0;

$(window).scroll(function() {
	scrollHeight = $('body,html').scrollTop();
	winHeight = $(window).height();
	
	headerBgChange();
	indexProductTitle();

	$(".scroll-animation").each(function () {
		var offsetTop = $(this).offset().top;
		if (scrollHeight > offsetTop - winHeight / 1.3) {
			const mode = $(this).attr("mode");
			$(this).addClass(mode + " animated");
		}
	})
})

// 头部变色
function headerBgChange() {
	bannerHeight = banner.clientHeight;
	if (scrollHeight > bannerHeight) {
		headerEl.style.backgroundColor = 'rgba(255, 255, 255, 1)';
		headerEl.style.borderBottom = "1px solid #f9f9f9";
	} else {
		headerEl.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		headerEl.style.borderBottom = "none";
	}
}

// 首页产品标题
function indexProductTitle() {
	var productionTitle = $("#productionTitle");
	if (productionTitle) {
		var productionTitleHeight = productionTitle.clientHeight;
		var productionTitleOffset = scrollHeight < productionTitleHeight ? productionTitleHeight - scrollHeight : 0;
		productionTitle.style.transform = "translate3d(0, " + productionTitleOffset + "px, 0)";
	}
}