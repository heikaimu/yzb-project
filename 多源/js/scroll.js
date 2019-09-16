var topEl = document.getElementById("webTop");
var headerEl = document.getElementById("webHeader");
var banner = document.getElementById("webBanner");
var productionTitle = document.getElementById("productionTitle");

var winHeight = 0;
var scrollHeight = 0;
var bannerHeight = 0;
var productionTitleHeight = productionTitle.clientHeight;

document.addEventListener('scroll', function () {
	scrollHeight = document.documentElement.scrollTop;
	bannerHeight = banner.clientHeight;
	if (scrollHeight > bannerHeight) {
		headerEl.style.backgroundColor = 'rgba(255, 255, 255, 1)';
		headerEl.style.borderBottom = "1px solid #f9f9f9";
	} else {
		headerEl.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		headerEl.style.borderBottom = "none";
	}

	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight;
	}
	var productionTitleOffset = scrollHeight < productionTitleHeight ? productionTitleHeight - scrollHeight : 0;
	productionTitle.style.transform = "translate3d(0, " + productionTitleOffset + "px, 0)";
})
