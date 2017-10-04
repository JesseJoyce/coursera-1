(function (window) {

	var helloSpeaker = {
		speak: function(name) {
		console.log(speakWord + " " + name);
		}
	};
	
	window.helloSpeaker = helloSpeaker;
	var speakWord = "Hello";

})(window);