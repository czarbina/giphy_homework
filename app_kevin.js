$(document).ready(function() { 
    var a = $("<button class = 'btn btn-default'>");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=zGKEPowR6XyoEk3BVdjDye8uWiHmfs8b";
    var userSearch = $("#user-search").val().trim();
    var theButtons = ["cat", "dog", "baby", "funny", "dance"];
    $("#subbtn").on("click", function(e) {
        console.log(this);
        e.preventDefault();
        console.log("hi", userSearch);
        userSearch = $("#user-search").val().trim();
        theButtons.push(userSearch);
        renderButtons();
    });
    function renderButtons () {
         $("#btn-group").empty();
         for (var i = 0; i < theButtons.length; i++) {
         var btn = $("<button class = 'btn btn-default'>")
         btn.addClass("search");
         btn.attr("data-name", theButtons[i])
         btn.text(theButtons[i]);
         $("#btn-group").append(btn);
            }
    }
    $(document).on("click", ".search", function(event) {
    event.preventDefault();
    theButtons.push(a);
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response){
        console.log(response);
        for (var i = 0; i < results.length; i++) {
         //        var animalDiv = $("<div>");
         //        var rating = results[i].rating;
         //        var p = $("<p>").text("Rating " + rating);
         //        var animalImage = $("<img>").attr("src",  results[i].images.original.url);
                 
         //        animalDiv.append(p);
         //        animalDiv.append(animalImage);
         //        $("#gifs-appear-here").prepend(animalDiv);
        }
        });
    });
    renderButtons();
});
1 Comment