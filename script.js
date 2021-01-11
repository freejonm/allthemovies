var movies = [
  {title: "jurassic+park",
   review: "a fund romp. kids love and are terrified by it. adults remember being kids." },
  {title: "breathless",
   review: "bonnie et clyde. she's a winner, he's a loser, but you can't outsmart the paris police." },
  {title: "dazed+and+confused",
   review: "come for the catchphrases, drugs, and rock and roll. stay for that summer (not) coming of age feeling." }
]



function renderCards(){
  for(var i = 0; i < movies.length; i++){
    var title = movies[i].title;
    var review = movies[i].review;
    console.log(title);
    console.log(review); 

    $.ajax({
      url: "https://www.omdbapi.com/?t=" + title +"&y=&plot=short&apikey=c2a157c7",
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $("body").append(
        "<div>" + response.Title + "</div>" +
        "<div>" + response.Released + "</div>" +
        "<div>" + response.Director+ "</div>" +
        "<div>" + response.Actors+ "</div>" +
        "<div>" + response.Plot + "</div>" +
        "<div>" + review + "</div>"
        );

      // $("#card-title1").text(response.Title);
      // $("#year-director").text("Released " + response.Released + " Director: " + response.Director);
      // $("#plot1").text("Plot summary: " + response.Plot);
      // $("#cast1").text("Cast: " + response.Actors);
      // $("#awards1").text("Awards info: " + response.Awards);
  
  })}
  }

  renderCards();
