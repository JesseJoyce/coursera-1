$(function () {
	$("button.navbar-toggle").blur( 
			function (event) {
				$("#collapsable-nav").collapse('hide');
			}
	);
});

(function(global) {

	var dc = {};
	var homeHtml = "snippets/home-snippet.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHtml = html;
	};

	var showLoading = function (selector) {
		var html = "<div class='text-center'>" + 
		"<img src='images/ajax-loader.gif'> </div>";
		insertHtml(selector,html);
	}

	document.addEventListener("DOMContentLoaded", 
		function (event) {
			showLoading("#main-content");
			$ajaxUtils.sendGetRequest(
				homeHtml, 
				function (responseText) {
					document.querySelector("#main-content").innerHTML
						 = responseText;
				}, 
				false);
		});

	global.$dc = dc;
	console.log(document.querySelector("#main-content").innerHtml);
	console.log("mwahaha")
})(window);