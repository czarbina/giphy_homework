$(function() {
	
	var topics = ["Octopus", "Squid", "Cuttlefish", "Sunfish", "Whale Shark", "Manta Ray", "Mobula Ray",
		"orca", "humpback whale", "narwhal", "blue whale", "beluga", "manatee"]

		for (var i = 0; i<topics.length; i++) {
			var buttons = $("<button>").text(topics[i]);
			$("body").append(buttons);

		}
	$("button").on("click", function() {
		var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    	$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {
      
    	});

	});

	alert("I'm connected!")
});	 	