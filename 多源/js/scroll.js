document.addEventListener('scroll', function () {
    var topEl = document.getElementById("webTop");
    var headerEl = document.getElementById("webHeader");
    var banner = document.getElementById("webBanner");
    var scrollHeight = document.documentElement.scrollTop;
    var bannerHeight = banner.clientHeight;
    if (scrollHeight > bannerHeight) {
        topEl.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        headerEl.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        headerEl.style.borderBottom = "1px solid #f9f9f9";
    } else {
        topEl.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        headerEl.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        headerEl.style.borderBottom = "none";
    }
})