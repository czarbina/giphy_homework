$(function() {
	
	var topics = ["Octopus", "Squid", "Cuttlefish", "Sunfish", "Whale Shark", "Manta Ray", "Mobula Ray",
		"orca", "humpback whale", "narwhal", "blue whale", "beluga", "manatee"];

	for (var i = 0; i<topics.length; i++) {
		var buttons = $("<button>")
		buttons.addClass("gif-button").attr("data-name", topics[i]).text(topics[i]);
		$("#btn-row").append(buttons);
	}

	$(".gif-button").on("click", function() {

	var gif = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10&api_key=4TmD6bF0cg89gvwor3N8418yLrk2zN2X";	

	$.ajax({
      	url: queryURL,
      	method: 'GET'
    }).done(function(response) {

		console.log(response);
		var results = response.data;

		for (var i = 0; i< results.length; i++) {
			var seaDiv = $("<div>");
			var p = $("<p>").text("Rating: " + results[i].rating);
			var animalStill = $("<img>");
			animalStill.attr("src", results[i].images.fixed_height_still.url);
			seaDiv.append(p);
			seaDiv.append(animalStill);
			$("#gif-dump-row").prepend(seaDiv);

		}	
    });	

});

	
	console.log("Ready!");		

});	