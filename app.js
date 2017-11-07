$(function() {

	var topics = ["Octopus", "Squid", "Cuttlefish", "Sunfish", "Whale Shark", "Manta Ray", "Mobula Ray",
		"orca", "humpback whale", "narwhal", "blue whale", "beluga", "manatee"]

		for (var i = 0; i<topics.length; i++) {
			var buttons = $("<button>").text(topics[i]);
			$("#gif-buttons").append(buttons);

		}

	function displayGifs() {
		var gif = $
	}
		

	$("button").on("click", function() {
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic 
		+ "&limit=10&api_key=4TmD6bF0cg89gvwor3N8418yLrk2zN2X";

    	$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

    		
      
    	});

	});

});	 	