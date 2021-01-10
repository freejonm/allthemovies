console.log("it's working dummy");

$.ajax({
    url: "https://www.omdbapi.com/?t=jurassic+park&y=&plot=short&apikey=c2a157c7",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#card-title1").text(response.Title);
    $("#year-director").text("Released " + response.Released + " Director: " + response.Director);
    $("#plot1").text("Plot summary: " + response.Plot);
    $("#cast1").text("Cast: " + response.Actors);
    $("#awards1").text("Awards info: " + response.Awards);
  });


