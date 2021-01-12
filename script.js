var movies = [
  {title: "jurassic+park",
   review: "a fun romp. kids love and are terrified by it. adults remember being kids." },
  {title: "breathless",
   review: "bonnie et clyde. she's a winner, he's a loser, but you can't outsmart the paris police." },
  {title: "dazed+and+confused",
   review: "essential viewing. come for the catchphrases, drugs, and rock and roll. stay for that summer (not) coming of age feeling." }
]



function renderCards(){
  for(var i = 0; i < movies.length; i++){
    var title = movies[i].title;
    var review = movies[i].review;

    console.log(review);
    
    

    $.ajax({
      url: "https://www.omdbapi.com/?t=" + title +"&y=&plot=short&apikey=c2a157c7",
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $("body").append(
        "<div class = card><div class = card body><h5 id = card-title>" + response.Title +
        "</h5><p id = year-director>released " + response.Released + 
        "</p><p class = card-text>" + review + "</p></div></div>"



        // "<div class = title>" + response.Title + "</div>" +
        // "<div class = release> released " + response.Released + "</div>" +
        // "<div class = director>" + response.Director+ "</div>" +
        // "<div class = cast>" + response.Actors+ "</div>" +
        // "<div class = plot>" + response.Plot + "</div>"
        );
        
    })
    
    }
  }

  renderCards();
