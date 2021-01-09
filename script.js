console.log("it's working dummy");

$.ajax({
    url: "https://www.omdbapi.com/?t=jurassic+park&y=&plot=short&apikey=c2a157c7",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#card-title1").text(response.Title);
    $("#plot1").text(response.Plot);
    $("#cast1").text(response.Actors);
    $("#awards1").text(response.Awards);


  });


