(function (window) {

	var byeSpeaker = {
	 	speak: function (name) {
	 		console.log(speakWord + " " + name);
	 	}
	};

	window.byeSpeaker = byeSpeaker;
	var speakWord = "Good Bye";

})(window);