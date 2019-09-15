$(function () {
	$("#phoneMenusBtn").click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		$("#webMenus").fadeToggle();
	})
	document.addEventListener('click', function (e) {
		if (document.body.clientWidth < 900) {
			if (e.target.id !== "phoneMenusBtn") {
				$("#webMenus").hide();
				$("#phoneMenusBtn").removeClass("active");
			}
		}
	})

})
window.onresize = function () {
	var wWidth = document.body.clientWidth;
	if (wWidth < 900) {
		$("#webMenus").hide();
		$("#phoneMenusBtn").removeClass("active");
	} else {
		$("#webMenus").show();
		$("#phoneMenusBtn").addClass("active");
	}
}