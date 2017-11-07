$(function() {

	var topics = ["Octopus", "Squid", "Cuttlefish", "Sunfish", "Whale Shark", "Manta Ray", "Mobula Ray",
		"orca", "humpback whale", "narwhal", "blue whale", "beluga", "manatee"]

		for (var i = 0; i<topics.length; i++) {
			var buttons = $("<button>")
			buttons.addClass("gif-button").attr("data-name", topics[i]).text(topics[i]);
			$("#buttons-view").append(buttons);
			console.log(buttons);

		}

	function displayGifs() {
	
		var gif = $(this).attr("data-name");
		// var queryURL = "https://api.giphy.com/v1/gifs/search?q=manatee&limit=10&api_key=4TmD6bF0cg89gvwor3N8418yLrk2zN2X";
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif 
		+ "&limit=10&api_key=4TmD6bF0cg89gvwor3N8418yLrk2zN2X";	

		$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {

    		var gifDiv = $("<div id='giffyDiv'>");
    		var gifStill = response.data.images.fixed_height_still;
    		var pStill = $("<img>").attr("src", gifStill); 
    		var rating = response.data.rating;
    		var pRating = $("<p>").text("Rating: " + rating);
    		gifDiv.append(pRating);

    		$("#gifs-view").prepend(gifDiv);
      
    	});

	}

	function makeButtons() {	

	$("#buttons-view").empty();	

	for (var i = 0; i<topics.length; i++) {
		var buttons = $("<button>")
		buttons.addClass("gif-button").attr("data-name", topics[i]).text(topics[i]);
		$("#buttons-view").append(buttons);
		console.log(buttons);

		}
	}	

	$("#add-gif").on("click", function(event) {
		event.preventDefault();
		var gif = $("#gif-input").val().trim();
		topics.push(gif);
		makeButtons();

	});

	$(document).on("click", "gif-button", displayGifs);

	

});
	